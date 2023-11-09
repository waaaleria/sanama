import axios from "axios";
import connection from "@/config/connection";

const axiosInstance = axios.create({
  baseURL: connection.backend,
});

export const doctorService = {
  insertar: async (doctorForm) => {
    try {
      const response = await axiosInstance.put("/rrhh/put/doctor", doctorForm);
      return response.data;
    } catch (error) {
      console.error("Error al insertar los datos del doctor", error);
      throw error;
    }
  },

  buscarPorNombre: async (name) => {
    try {
      const response = await axiosInstance.post("/rrhh/post/buscarMedico", {
        pv_filtro: name,
      });
      return response.data;
    } catch (error) {
      console.error("Error al buscar doctores por nombre", error);
      throw error;
    }
  },

  listarEspecialidades: async () => {
    try {
      const response = await axiosInstance.get("/rrhh/get/especialidad");
      //console.log(response)
      return response.data;
    } catch (error) {
      console.error("Error al listar las especialidades", error);
      throw error;
    }
  },

  buscarPorMedicoEspecialidad: async (filtro, especialidad) => {
    try {
      const response = await axiosInstance.post(
        "/rrhh/post/listarMedicosPorEspecialidadNombreCmp",
        {
          pv_medico: filtro,
          pv_especialidad: especialidad,
        }
      );
      //console.log(response)
      return response.data;
    } catch (error) {
      console.error("Error al buscar doctores por especialidad", error);
      throw error;
    }
  },

  buscarHorariosMedicoFecha: async (fecha, medicId) => {
    try {
      const response = await axiosInstance.post(
        "/rrhh/post/horarios_por_medico_y_fecha",
        {
          pn_id_medico: medicId,
          pd_fecha: fecha,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al buscar doctores por especialidad", error);
      throw error;
    }
  },

  DiasDisponiblesByID: async (medicId) => {
    try {
      const response = await axiosInstance.post(
        "/rrhh/post/dias_disponibles_por_medico",
        {
          pn_id_medico: medicId,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al buscar los dias", error);
      throw error;
    }
  },
};
