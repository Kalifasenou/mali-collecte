package com.malicollecte.repository;

import com.malicollecte.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepositorie extends JpaRepository<Question, Long> {
}
