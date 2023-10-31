package com.minsa.sanama.controller.admision;
import com.minsa.sanama.model.admision.Paciente;
import com.minsa.sanama.services.admision.PacienteService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admision")
@CrossOrigin
public class PacienteController {
    @Autowired
    PacienteService pacienteService;

    @GetMapping(value = "/get/paciente")
    @ResponseBody
    public List<Paciente> listarPacientes(){
        List<Paciente> pacientes;

        pacientes = pacienteService.listarPacientes();
        return pacientes;
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE},
            value = "/post/buscarPaciente")
    @ResponseBody
    public List<Paciente> buscarPacienteFiltro(@RequestBody String pv_filtro){
        List<Paciente> pacientes = null;
        try{
            System.out.println(pv_filtro);
            JSONObject job = (JSONObject) new JSONParser().parse(pv_filtro);
            String cadena = job.get("pv_filtro").toString();
            System.out.println(cadena);
            pacientes = pacienteService.buscarPacienteFiltro(cadena);

        }catch(Exception ex){

        }
        return pacientes;
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE},
            value = "/post/mostrarPacienteRegistrado")
    @ResponseBody
    public Paciente mostrarPacienteRegistrado(@RequestBody String pv_filtro){
        Paciente paciente = null;
        try{
            JSONObject job = (JSONObject) new JSONParser().parse(pv_filtro);
            String pn_id_paciente = job.get("pn_id_paciente").toString();
            paciente = pacienteService.mostrarPacienteRegistrado(pn_id_paciente);
            paciente.setHistorialClinico(null);

        }catch(Exception ex){

        }
        return paciente;
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE},
            value = "/post/buscarPacienteModal")
    @ResponseBody
    public List<Paciente> buscarPacienteModal(@RequestBody String pv_filtro){
        List<Paciente> pacientes = null;
        try{
            JSONObject job = (JSONObject) new JSONParser().parse(pv_filtro);
            String nombreDni = job.get("pv_nombre_dni").toString();
            pacientes = pacienteService.buscarPaciente(nombreDni);
        }catch(Exception ex){
        }
        return pacientes;
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE},
            value = "/post/buscarPacientePrueba")

    @ResponseBody
    public List<Paciente> buscarPacienteFiltroPrueba(@RequestBody String pv_filtro){
        List<Paciente> pacientes = null;
        try{
            System.out.println(pv_filtro);
            JSONObject job = (JSONObject) new JSONParser().parse(pv_filtro);
            String cadena = job.get("pv_filtro").toString();
            System.out.println(cadena);
            pacientes = pacienteService.buscarPacienteFiltroPrueba(cadena);

        }catch(Exception ex){

        }
        return pacientes;
    }


    @PutMapping(value = "/put/paciente")
    @ResponseBody
    public int registrarPaciente(@RequestBody Paciente paciente){
        int idPaciente;

        idPaciente = pacienteService.registrarPaciente(paciente);
        return idPaciente;
    }

    @PutMapping(value = "/put/actualizarPaciente")
    @ResponseBody
    public int actualizarPaciente(@RequestBody Paciente paciente){
        int n;
        n = pacienteService.actualizarPaciente(paciente);
        return n;
    }

    @DeleteMapping(value = "/delete/eliminarPaciente")
    @ResponseBody
    public int eliminarPaciente(@RequestBody Paciente paciente){
        int n;
        n = pacienteService.eliminarPaciente(paciente);
        return n;
    }
}
