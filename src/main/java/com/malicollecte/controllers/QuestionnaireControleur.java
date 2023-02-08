package com.malicollecte.controllers;


import com.malicollecte.Services.QuestionService;
import com.malicollecte.Services.QuestionnaireService;
import com.malicollecte.models.Question;
import com.malicollecte.models.Questionnaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questionnaire")
public class QuestionnaireControleur {

    @Autowired
    QuestionnaireService questionnaireService;

    @Autowired
    QuestionService questionService;

    @GetMapping("/afficher/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public Questionnaire afficherQuestionnaire(@PathVariable Long id){
        return questionnaireService.AfficherUn(id);
    }

    @PostMapping("/ajouter/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public Questionnaire ajouterQuestionnaire(@PathVariable Long id, @RequestBody Questionnaire questionnaire){
        return questionnaireService.Creer(id, questionnaire);
    }

    @GetMapping("/toutafficher")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public List<Questionnaire> toutafficher(){
        return questionnaireService.ToutAfficher();
    }

    @PutMapping("modifier/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public Questionnaire modifierQuestionnaire(@PathVariable Long id, @RequestBody Questionnaire questionnaire){
        return questionnaireService.Modifier(id, questionnaire);
    }


    @DeleteMapping("/supprimerquestion/{id}")
    public void supprimerQuestionnaire(@PathVariable Long id){
        questionnaireService.SupprimerQuestion(id);
    }

    @PostMapping("/ajoutquestion/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public String AjouterQuestion(@PathVariable Long id, @RequestBody Question question){
        return questionnaireService.AjouterQuestion(id, question);
    }

    @GetMapping("/affichertoutquestions")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public List<Question> questions(){
        return questionnaireService.AfficherTouteQuestion();
    }


    @PostMapping("/ajoutrepondant/{id}/{idUsers}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_MODERATOR')")
    public String ajouterRepondant(@PathVariable Long id, @RequestBody List<Long> idUsers){
        return questionnaireService.AjouterRepondant(id, idUsers);
    }
}
