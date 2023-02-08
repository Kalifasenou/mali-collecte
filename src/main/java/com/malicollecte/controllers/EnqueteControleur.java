package com.malicollecte.controllers;

import com.malicollecte.Services.EnqueteService;
import com.malicollecte.models.Enquete;
import com.malicollecte.models.User;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/enquete")
@CrossOrigin(origins = "http://localhost:8100", maxAge = 3600, allowCredentials="true")
public class EnqueteControleur {

    @Autowired
    private EnqueteService enqueteService;


        @PreAuthorize("hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
        @PostMapping("/creer")
        public ResponseEntity<Enquete> createEnquete(@Valid @RequestBody Enquete enquete) {
            return ResponseEntity.ok(enqueteService.Creer(enquete));
        }

        @PreAuthorize("hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
        @PutMapping("/modifier/{id}")
        public ResponseEntity<Enquete> updateEnquete(@PathVariable Long id, @Valid @RequestBody Enquete enquete) {
            return ResponseEntity.ok(enqueteService.Modifier(id, enquete));
        }

        @PreAuthorize("hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
        @DeleteMapping("/supprimer/{id}")
        public ResponseEntity<String> deleteEnquete(@PathVariable Long id) {
            enqueteService.Supprimer(id);
             ResponseEntity.noContent().build();
             return ResponseEntity.ok("Enquête  " + id + " supprimer avec succés") ;
        }

        @GetMapping("/afficher/{id}")
        //@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
        public ResponseEntity<Enquete> getEnquete(@PathVariable Long id) {
            return ResponseEntity.ok(enqueteService.AfficherUn(id));
        }

        @GetMapping("/toutafficher")
       // @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
        public ResponseEntity<List<Enquete>> getEnquetes() {
            return ResponseEntity.ok(enqueteService.ToutAfficher());
        }


//        @GetMapping("/afficherparorganisation/{organisation}")
//        @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
//        public ResponseEntity<List<Enquete>> getEnquetesByOrganisation(@PathVariable String organisation) {
//            return ResponseEntity.ok(enqueteService.AfficherparOrganisation(organisation));
//        }

   /*     @GetMapping("/createur/{createur}")
        @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
        public ResponseEntity<List<User>> getEnquetesByCreateur(@PathVariable String createur) {
            return ResponseEntity.ok(enqueteService.AfficherparCreateur(createur));
        }*/

        @GetMapping("/statut/{statut}")
        @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
        public ResponseEntity<List<Enquete>> getEnquetesByStatut(@PathVariable String statut) {
            return ResponseEntity.ok(enqueteService.AfficherparStatut(statut));
        }

//        @PreAuthorize("hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
//        @GetMapping("/afficherpar/{statut/{organisation}")
//        public ResponseEntity<List<Enquete>> getEnquetesByStatutAndOrganisation(@PathVariable String statut, @PathVariable String organisation){
//            return ResponseEntity.ok(enqueteService.AfficherparStatutEtOrga(statut, organisation));
//            }


        @GetMapping("/afficherparstatut/{statut}")
        @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
        public ResponseEntity<List<Enquete>> getEnquetesStatut(@PathVariable String statut){
            return ResponseEntity.ok(enqueteService.AfficherparStatut(statut));
            }

    @GetMapping("/afficherpartype/{type}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public ResponseEntity<List<Enquete>> getEnquetesType(@PathVariable String stype){
        return ResponseEntity.ok(enqueteService.AfficherparType(stype));
    }
}

