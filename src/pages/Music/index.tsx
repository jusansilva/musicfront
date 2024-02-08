import { createElement, useEffect, useState } from "react";
import View from "./view";
import { IObjGrid, IViewProps } from "./types";
import { useNavigate } from "react-router-dom";
import { IGridData, IGridHeader } from "@components/DataGrid";
import { MusicService } from "@services/music";

const Music = () => {
  const [data, setData] = useState<IGridData[]>([])
  const [musicies, setArtits] = useState<any>([]);
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
      label: 'Tempo',
      grid: 2,
      action: () => null,
      order: false,
      value: 'time',
      field: 'value',
      styles: {
        align: 'left',
        fontType: 'bold',
        fontSize: 14,
      },
    },
    {
      label: 'Album',
      grid: 3,
      action: () => null,
      order: false,
      value: 'album',
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
    console.log(musicies)

    if (musicies && musicies.length) {
      documents = musicies.map((music, index) => {
        const item: IGridData = getObjDataGrid({
          id: music.id,
          title: music.title,
          time: music.time,
          album: music.album.title,
          index,
        })
        return item
      })
    }

    setData(documents)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicies])

  const getObjDataGrid = ({ id, title, time , album, index }: IObjGrid) => {
    return {
      id,
      values: {
        title,
        time,
        album,
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
    getArtits()
  }, [])

  const getArtits = async () => {
    const musics = await MusicService.getMusic();
    setArtits(musics.content)
  };
  const ViewProps: IViewProps = {
    handleNavigate,
    data,
    header
};
  return createElement(View, ViewProps);
};

export default Music;
