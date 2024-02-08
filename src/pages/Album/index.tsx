import { createElement, useEffect, useState } from "react";
import View from "./view";
import { IObjGrid, IViewProps } from "./types";
import { useNavigate } from "react-router-dom";
import { AlbumService } from "@services/album";
import { IGridData, IGridHeader } from "@components/DataGrid";
import { Button } from "@mui/material";

const Album = () => {
  const [data, setData] = useState<IGridData[]>([])
  const [artits, setArtits] = useState<any>([]);
  const useHandleNavigate = () => {
    const navigate = useNavigate();

    const handleNavigate = (item: string) => {
      navigate(item);
    };
    return handleNavigate;
  };
  const handleNavigate = useHandleNavigate();

  const header: IGridHeader[] = [
    {
      label: 'Titulo',
      grid: 1.5,
      action: () => null,
      order: false,
      value: 'title',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
    {
      label: 'Ano',
      grid: 2,
      action: () => null,
      order: false,
      value: 'yeard',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
    {
      label: 'Artista',
      grid: 3,
      action: () => null,
      order: false,
      value: 'artist',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
  ]

  useEffect(() => {
    getArtits();
    let documents: IGridData[] = []


    if (artits && artits.length) {
      documents = artits.map((album, index) => {
        const item: IGridData = getObjDataGrid({
          id: album.id,
          title: album.title,
          yeard: album.yeard,
          artist: album.artist.name,
          index,
        })
        return item
      })
    }

    setData(documents)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artits])

  const getObjDataGrid = ({ id, title, yeard , artist, index }: IObjGrid) => {
    return {
      id,
      values: {
        title,
        yeard,
        artist,
        index,
      },
      select: '',
      action: (
        <>
          <button
            type="button"
            disabled={!data.length}
            onClick={() => {}}
          >

              Baixar

          </button>


          <button
            type="button"
            onClick={() =>
             {}
            }

          >
              Alterar
          </button>


          <button
            type="button"
            onClick={() => {}}
          >

              Excluir

          </button>
        </>
      ),
    }
  }

  const getArtits = async () => {
    const albums = await AlbumService.getAlbum();
    setArtits(albums.content)
  };
  const ViewProps: IViewProps = {
    handleNavigate,
    data,
    header
};
  return createElement(View, ViewProps);
};

export default Album;
