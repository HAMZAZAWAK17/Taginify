import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import image7 from "../../assets/image7.jpeg";
import './About.css'; // Importez le fichier CSS personnalisé

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const teamMembers = [
    {
      name: "Ez-zouek Hamza",
      role: "Chef Exécutif",
      description:
        "Hamza est le chef exécutif du restaurant, maîtrisant l'art de la cuisine marocaine traditionnelle. Il crée des expériences culinaires inoubliables avec des plats authentiques et savoureux.",
      photo: image7
    },
    {
      name: "Sophie Berger",
      role: "Responsable des Relations Client",
      description:
        "Sophie supervise les interactions avec les clients pour garantir un service exceptionnel et une expérience mémorable pour tous nos invités.",
      photo: image6
    },
    {
      name: "Lucas Dupont",
      role: "Responsable des Achats",
      description:
        "Lucas est chargé de s'approvisionner en ingrédients frais et de qualité directement du Maroc, assurant l'authenticité de nos plats.",
      photo: image1
    },
    {
      name: "Emma Lambert",
      role: "Coordinatrice des Événements",
      description:
        "Emma organise des événements et des soirées thématiques qui mettent en valeur la richesse de la culture marocaine à travers la cuisine et la musique.",
      photo: image2
    },
    {
      name: "Thomas Martin",
      role: "Directeur des Opérations",
      description:
        "Thomas gère les opérations quotidiennes du restaurant, garantissant que tout fonctionne de manière fluide et efficace.",
      photo: image3
    },
    {
      name: "Camille Leroy",
      role: "Responsable Marketing",
      description:
        "Camille est en charge de promouvoir le restaurant et de gérer notre présence en ligne pour attirer les amoureux de la cuisine marocaine.",
      photo: image4
    },
    {
      name: "Antoine Rousseau",
      role: "Chef Pâtissier",
      description:
        "Antoine prépare des desserts marocains traditionnels tels que les cornes de gazelle et le pastilla sucrée, apportant une touche sucrée à chaque repas.",
      photo: image5
    }
  ];

  return (
    <div className="about-section" id="about-section">
      <div className="about-heading" data-aos="fade-up">
        <h3>Notre Équipe Exceptionnelle</h3>
        <p>Le cœur et l'âme de notre cuisine marocaine traditionnelle</p>
      </div>
      <div className="about-team">
        <div className="team-member large-member featured-chef" data-aos="fade-up">
          <div className="member-card">
            <div className="member-photo-wrapper">
              <img src={teamMembers[0].photo} alt={teamMembers[0].name} className="team-photo" />
            </div>
            <div className="member-details">
              <h3 className="team-name">{teamMembers[0].name}</h3>
              <b className="team-role">{teamMembers[0].role}</b>
              <p className="team-description">{teamMembers[0].description}</p>
            </div>
          </div>
        </div>
        <div className="team-grid">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="team-member" data-aos="fade-up">
              <div className="member-card">
                <div className="member-photo-wrapper">
                  <img src={member.photo} alt={member.name} className="team-photo" />
                </div>
                <div className="member-details">
                  <h3 className="team-name">{member.name}</h3>
                  <b className="team-role">{member.role}</b>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
