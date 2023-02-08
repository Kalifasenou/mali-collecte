package com.malicollecte.repository;

import com.malicollecte.models.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionnaireRepositorie extends JpaRepository<Questionnaire, Long> {
    //List<Questionnaire> findByStatus(String status);
}
