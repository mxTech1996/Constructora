"use client";
import { pageName } from "@/data";
import axios from "axios";
import { useState, useEffect } from "react";

const url = `https://cms.mxtechconsulting.com/api/website/${pageName}/`;
const token = "069c07b020945e19690b026f15a9605f9cc84fa0";
const initialState = {
    "name": "Constructora",
    "url": "http://w.w.w.terra.com",
    "telephone": "5573724368",
    "email": "admvizcayaa20@emailsecure.lat",
    "address": "AV DAVID ALFARO SIQUEIROS 106, PISO 17, DEL VALLE ORIENTE, SAN PEDRO GARZA GARCIA, NUEVO LEON, C.P. 66260",
    "description": "We specialize in providing comprehensive consulting services to ensure your construction project is executed efficiently, safely, and within budget.",
    "subtitle": "Expert Consulting to Build Your Dream Home with Confidence and Efficiency",
    "image_hero": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/constru_1_.jpg",
    "image_hero2": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/constru_2_.jpg",
    "iconImage": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/constructora-vizcayaa-20-sa-de-cv-high-resolution-logo.png",
    "info": [
        {
            "title": "Values",
            "description": "Integrity & Transparency ,We provide honest, clear, and reliable guidance throughout every stage of your project,Quality & Excellence ,We are committed to delivering high-standard solutions that ensure durability, efficiency, and customer satisfaction,Innovation & Sustainability ,We incorporate modern, eco-friendly, and cost-effective practices to create homes that are both functional and future-proof."
        },
        {
            "title": "Scopes of housing construction",
            "description": "The scope of housing construction refers to the various aspects and phases involved in planning, design and construction, being a potential industry that brought those involved great benefits."
        },
        {
            "title": "Objective",
            "description": "Our main objective is to provide expert and personalized guidance to help clients plan, manage and execute their construction projects efficiently, safely and on budget, ensuring quality and regulatory compliance."
        }
    ],
    "services": [
        {
            "title": "Planning and Design Consulting",
            "description": "The Planning and Design Consulting service focuses on advising and developing strategies for infrastructure, construction, urban planning, and architectural design projects",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/constru_3.jpg"
        },
        {
            "title": "Budget and Cost Management",
            "description": "The Budget and Cost Management service focuses on managing and controlling the financial aspects of projects to ensure that they are completed within budget and according to financial expectations",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/constru_4.jpg"
        },
        {
            "title": "Construction Supervision and Compliance",
            "description": "The Construction Supervision and Compliance service is aimed at ensuring that a construction project is executed according to established plans, specifications, timelines, and regulatory requirements,It focuses on overseeing the entire construction process and ensuring that all standards are met to guarantee safety, quality, and legal compliance.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/constru_5.jpg"
        },
        {
            "title": "Material and Supplier Selection",
            "description": "The Material and Supplier Selection service focuses on identifying, evaluating, and procuring the best materials and suppliers for a construction or design project,This process ensures quality, cost-effectiveness, sustainability, and compliance with project requirements",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/constru_.jpg"
        },
        {
            "title": "Material and Supplier Selection",
            "description": "The Material and Supplier Selection service focuses on identifying, evaluating, and procuring the best materials and suppliers for construction, manufacturing, or design projects,This ensures quality, cost-effectiveness, sustainability, and compliance with project specifications.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/constru_9.jpg"
        }
    ],
    "references": [
        {
            "name": "John Mendoza",
            "description": "Excellent service from start to finish,The consulting team helped me navigate the entire home construction process, from budgeting to contractor selection,Their expertise saved me time and money, and I felt confident in every decision I made.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Sarahi Lemna",
            "description": "I had no prior experience in home construction, but this consultancy made everything so much easier,They provided clear guidance, reviewed my plans, and even helped me secure the necessary permits.",
            "rating": 5,
            "image": null
        },
        {
            "name": "David Ramnson",
            "description": "The team was very knowledgeable and provided valuable insights on material selection and energy-efficient solutions,My only suggestion would be to improve response times, but overall, a great experience.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Maria Johnson",
            "description": "Professional, detail-oriented, and extremely helpful,They guided me through the entire construction process and made sure my project stayed within budget,Their recommendations on sustainable building practices were also a huge plus",
            "rating": 5,
            "image": null
        },
        {
            "name": "Michael Boans",
            "description": "A reliable and trustworthy consulting firm for home construction projects,They helped me avoid costly mistakes and ensured my project complied with all local regulations,Communication was good, but there were slight delays in getting certain approvals.",
            "rating": 5,
            "image": null
        }
    ],
    "products": [
        {
            "id": 528,
            "name": "Material and Finish Selection",
            "category": null,
            "description": "Material and Finish Selection is a professional service that helps clients choose the most suitable materials and finishes for their construction or interior design projects,This service ensures the selection aligns with aesthetic preferences, functional requirements, durability, budget, and sustainability considerations.",
            "price": "799.99",
            "stock": 100,
            "content": "Assessment of project needs and design vision, Selection of materials for structural, architectural, and interior elements, Comparison of finishes based on durability, aesthetics, and cost, Sustainable and eco-friendly material recommendations, Coordination with suppliers and manufacturers,Sample procurement and on-site testing when needed.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru_12.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 524,
            "name": "Architectural Design Consulting",
            "category": null,
            "description": "Architectural Design Consulting is a professional service that provides specialized advice on the planning, design, and development of architectural projects,This service is used by clients looking to optimize the design of their buildings or structures, ensuring functionality, aesthetics, and regulatory compliance.",
            "price": "899.99",
            "stock": 100,
            "content": "Planning and conceptualization of architectural projects,Design of optimized spaces for functionality and aesthetics,Feasibility assessment in technical and economic terms,Advice on urban regulations and building codes,Customized Design, Feasibility AnalysisEvaluation of costs, materials, and execution times,Sustainability and Energy Efficiency, Strategies to reduce environmental impact.\r\nAdvanced Technology Usage,3D modeling, BIM (Building Information Modeling), and rendering for visualization,Regulatory Compliance.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru_6.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 525,
            "name": "Permits and Licensing Management",
            "category": null,
            "description": "Permits and Licensing Management is a professional service that assists individuals, businesses, and developers in obtaining the necessary permits and licenses for construction, business operations, or other regulated activities,This service ensures compliance with local, state, and federal regulations while streamlining the approval process.",
            "price": "899.99",
            "stock": 100,
            "content": "Identification of required permits and licenses based on project type,Preparation and submission of necessary documentation,Coordination with government agencies and regulatory bodies,Compliance assessment to ensure adherence to legal and safety standards,Permit tracking and follow-up until approval is obtained,Faster approval times and reduced bureaucratic hurdles, Lower risk of project delays due to permit issues, Cost savings by preventing fines and non-compliance penalties.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru_8.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 526,
            "name": "Budgeting and Cost Estimation",
            "category": null,
            "description": "Budgeting and Cost Estimation is a professional service that helps individuals, businesses, and project managers accurately forecast costs and allocate resources efficiently,It ensures financial planning, prevents overspending, and enhances project feasibility by providing precise cost projections.",
            "price": "999.99",
            "stock": 100,
            "content": "Development of detailed project budgets,Cost estimation for materials, labor, and other expenses.\r\nFinancial feasibility analysis and risk assessment,Comparison of cost alternatives and optimization strategies,Continuous cost monitoring and adjustments throughout the project.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru10.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 527,
            "name": "Construction Supervision and Quality Control",
            "category": null,
            "description": "Construction Supervision and Quality Control is a professional service that ensures construction projects are executed according to design specifications, industry standards, and regulatory requirements. It involves monitoring construction activities, ensuring quality workmanship, and mitigating risks to guarantee safety, durability, and compliance.",
            "price": "1099.99",
            "stock": 100,
            "content": "On-site supervision of construction activities, Quality control inspections to verify materials and workmanship, Compliance checks with building codes and safety regulations, Progress monitoring to ensure adherence to project timelines, Coordination between contractors, engineers, and stakeholders, Identification and resolution of construction defects or issues.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/contru_11.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 529,
            "name": "Energy Efficiency Optimization",
            "category": null,
            "description": "Energy Efficiency Optimization is a professional service that enhances the energy performance of buildings and systems by implementing strategies that reduce energy consumption, lower costs, and minimize environmental impact,This service is essential for businesses, homeowners, and developers looking to improve sustainability and operational efficiency.",
            "price": "1099.99",
            "stock": 100,
            "content": "Energy audits and assessments to identify inefficiencies, Implementation of energy-saving technologies and practices,Optimization of HVAC, lighting, and insulation systems, Integration of renewable energy sources (solar, wind, etc.),Compliance with energy efficiency regulations and certifications,Monitoring and reporting on energy consumption improvements.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru_13.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 530,
            "name": "Land Evaluation and Project Feasibility",
            "category": null,
            "description": "Land Evaluation and Project Feasibility is a professional service that assesses the suitability of land for development and determines the viability of proposed projects, This service helps investors, developers, and businesses make informed decisions by analyzing environmental, economic, legal, and technical factors.",
            "price": "999.99",
            "stock": 100,
            "content": "Site Analysis,Evaluation of land conditions, topography, and accessibility, Environmental Impact Assessment: Identifying ecological concerns and sustainability factors,Zoning and Legal Compliance,Reviewing land use regulations, permits, and restrictions,Infrastructure and Utility Assessment,Availability of roads, water, electricity, and sewage,Financial Feasibility Study,Cost analysis, investment risks, and return on investment (ROI),Market Analysis,Demand, competition, and potential profitability of the project.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru14.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 531,
            "name": "Project Management and Oversight",
            "category": null,
            "description": "Project Management and Oversight is a professional service that ensures the successful planning, execution, and completion of projects by coordinating resources, managing risks, and maintaining quality standards,This service is essential for businesses, developers, and organizations seeking efficiency, cost control, and adherence to project goals.",
            "price": "1299.99",
            "stock": 100,
            "content": "Project Planning, Defining objectives, timelines, and resource allocation, Budget and Cost Control,Monitoring expenses to prevent overruns,Risk Management,Identifying and mitigating potential project risks,Stakeholder Coordination,Ensuring effective communication among all parties involved,Quality Assurance,Monitoring compliance with industry standards and project specifications, Progress Tracking and Reporting,Providing regular updates on project milestones.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/constru_15.jpg",
            "image2": null,
            "image3": null
        }
    ],
    "categories": []
}

export const useInformation = () => {
  const [dataSite, setDataSite] = useState(initialState);


  return { dataSite };
};
