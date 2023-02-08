package com.malicollecte.Services;

import com.malicollecte.models.Question;
import org.springframework.stereotype.Service;


public interface QuestionService {

    Question CreerUneQuestion(String type, Question question );

    Question AfficherQuestion(Long id );

    void SupprimerQuestion(Long id );



}
