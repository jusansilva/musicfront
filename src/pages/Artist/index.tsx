import { createElement, useEffect, useState } from "react";
import View from "./view";
import { IObjGrid, IViewProps } from "./types";
import { useNavigate } from "react-router-dom";
import { ArtistService } from "@services/artist";
import { IGridData, IGridHeader } from "@components/DataGrid";
import { Button } from "@mui/material";

const Artist = () => {
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
      label: 'Nome',
      grid: 1.5,
      action: () => null,
      order: false,
      value: 'name',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
    {
      label: 'Nacionalidade',
      grid: 2,
      action: () => null,
      order: false,
      value: 'nationality',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
    {
      label: 'Site',
      grid: 3,
      action: () => null,
      order: false,
      value: 'site',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
  ]

  useEffect(() => {
    let documents: IGridData[] = []


    if (artits && artits.length) {
      documents = artits.map((artist, index) => {
        const item: IGridData = getObjDataGrid({
          id: artist.id,
          name: artist.name,
          nationality: artist.nationality,
          site: artist.site,
          index,
        })
        return item
      })
    }

    setData(documents)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artits])

  const getObjDataGrid = ({ id, name, nationality , site, index }: IObjGrid) => {
    return {
      id,
      values: {
        name,
        nationality,
        site,
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

  useEffect(() => {
    getArtits();
  }, [])

  const getArtits = async () => {
    const artists = await ArtistService.getArtist();
    setArtits(artists.content)
  };
  const ViewProps: IViewProps = {
    handleNavigate,
    data,
    header
};
  return createElement(View, ViewProps);
};

export default Artist;
