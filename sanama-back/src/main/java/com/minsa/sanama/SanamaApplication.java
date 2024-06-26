package com.minsa.sanama;

import com.minsa.sanama.model.atencionmedica.Medicamento;
import org.json.simple.parser.JSONParser;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class SanamaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SanamaApplication.class, args);

		// Crear un JSONArray con dos objetos JSONObject
		JSONArray jsonArray = new JSONArray();

		// Imprimir el resultado
		System.out.println(jsonArray.toJSONString());

		try {
			List<Medicamento> lmedicamentos = new ArrayList<>();
			JSONArray jobArray = (JSONArray) new JSONParser().parse(jsonArray.toJSONString());
			for (Object obj : jobArray) {
				Medicamento medicamento = new Medicamento();
				JSONObject jobMed = (JSONObject) obj;
				medicamento.setNombre(jobMed.get("nombre").toString());
				medicamento.setIndicacion(jobMed.get("indicacion").toString());
				lmedicamentos.add(medicamento);
			}

			for (Medicamento med : lmedicamentos) {
				System.out.println("nombre: " + med.getNombre());
				System.out.println("indicacion: " + med.getIndicacion());
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

	public List<Medicamento> obtenerMedicamentos(String jsonMedicamentos) {
		List<Medicamento> lmedicamentos = null;
		try {
			JSONArray jobArray = (JSONArray) new JSONParser().parse(jsonMedicamentos);
			for (Object obj : jobArray) {
				Medicamento medicamento = new Medicamento();
				JSONObject jobMed = (JSONObject) obj;
				medicamento.setNombre(jobMed.get("nombre").toString());
				medicamento.setIndicacion(jobMed.get("indicacion").toString());
				lmedicamentos.add(medicamento);
			}
		} catch (Exception ex) {
			// Manejo de excepciones aquí
			ex.printStackTrace();
		}
		return lmedicamentos;
	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedOrigin("*");
		config.addAllowedMethod("*");
		config.addAllowedHeader("*");
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

}
