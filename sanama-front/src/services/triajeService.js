import axios from "axios";
import connection from "@/config/connection";

const axiosInstance = axios.create({
  baseURL: connection.backend,
});

const ENDPOINTS = {
  LISTAR_TRIAJE_POR_FILTRO: "/admision/post/listarTriajePorFiltro",
  BUSCAR_TRIAJE_POR_FILTRO: "/admision/post/buscarTriaje",
  ACTUALIZAR_TRIAJE: "/admision/put/actualizarTriaje",
};

export const triajeService = {
  listarTriajePorFiltro: async (filtro, fechaDesde, fechaHasta) => {
    try {
      const response = await axiosInstance.post(
        ENDPOINTS.LISTAR_TRIAJE_POR_FILTRO,
        {
          pv_filtro: filtro,
          pd_fecha_inicio: fechaDesde,
          pd_fecha_fin: fechaHasta,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al listar el triaje por filtro", error);
      throw error;
    }
  },

  buscarPorFiltro: async (idTriaje) => {
    try {
      const response = await axiosInstance.post(
        ENDPOINTS.BUSCAR_TRIAJE_POR_FILTRO,
        {
          pv_filtro: idTriaje,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al buscar triaje por filtro", error);
      throw error;
    }
  },

  actualizarTriaje: async (data) => {
    try {
      const response = await axiosInstance.put(
        ENDPOINTS.ACTUALIZAR_TRIAJE,
        data
      );
      return 1;
    } catch (error) {
      console.error("Error al actualizar el triaje", error);
      throw error;
    }
  },
};
