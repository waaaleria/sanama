package com.minsa.sanama.controller.atencion;

import com.minsa.sanama.model.atencionmedica.EvaluacionMedica;
import com.minsa.sanama.model.atencionmedica.HistorialClinico;
import com.minsa.sanama.model.atencionmedica.HojaMedica;
import com.minsa.sanama.services.atencion.EvaluacionMedicaService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/atencion")
@CrossOrigin
public class EvaluacionMedicaController {
    @Autowired
    EvaluacionMedicaService evaluacionMedicaService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE},
            value = "/post/registrarEvaluacionMedica")
    @ResponseBody
    public int registrarEvaluacionMedica(@RequestBody EvaluacionMedica evaluacionMedica){
        try{
            int n=0;
            n = evaluacionMedicaService.registrarEvaluacionMedica(evaluacionMedica);
            return n;
        }catch(Exception ex){
            // Manejo de excepciones aquí
            ex.printStackTrace();
        }
        return -1;
    }

}