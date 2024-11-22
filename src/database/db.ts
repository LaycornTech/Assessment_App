import Category from "../entities/category.entity";
import Assessment from "../entities/assessment.entity";
import Question from "../entities/question.entity";
import User from "../entities/user.entity";
import Result from "../entities/result.entity";
import Product from "../entities/product.entity";
import Cart from "../entities/cart.entity";



export const product: Product[] = [
    {
        id: 1, name: "VijuMilk", quantity: 80, price: 400
    },
    {
        id: 2, name: "CocaCola", quantity: 70, price: 600
    },
    {
        id: 3, name: "Bread", quantity: 60, price: 1500
    },
    {
        id: 4, name: "Shoes", quantity: 90, price: 10000
    },
    {
        id: 5, name: "Gucci", quantity: 50, price: 15000
    }


]

export let carts: Cart[] =[]









/**
 * Mock database for technology categories
 * Each category represents a different programming technology or concept
 */
export const categories: Category[] = [
    { 
        id: 1, 
        name: "JavaScript",
        description: "A dynamic programming language that enables interactive web pages and is an essential part of web applications"
    },
    { 
        id: 2, 
        name: "HTML",
        description: "The standard markup language for creating web pages and web applications"
    },
    { 
        id: 3, 
        name: "CSS",
        description: "A style sheet language used for describing the presentation of a document written in HTML"
    },
    { 
        id: 4, 
        name: "React",
        description: "A JavaScript library for building user interfaces, particularly single-page applications"
    },
    { 
        id: 5, 
        name: "Node.js",
        description: "A runtime environment that executes JavaScript code outside a web browser"
    },
    { 
        id: 6, 
        name: "Express.js",
        description: "A minimal and flexible Node.js web application framework for building web and mobile applications"
    },
    { 
        id: 7, 
        name: "MongoDB",
        description: "A NoSQL database program that uses JSON-like documents with optional schemas"
    },
    { 
        id: 8, 
        name: "SQL",
        description: "A standard language for storing, manipulating, and retrieving data in relational databases"
    },
    { 
        id: 9, 
        name: "Git",
        description: "A distributed version control system for tracking changes in source code during software development"
    },
    { 
        id: 10, 
        name: "RESTful APIs",
        description: "An architectural style for designing networked applications following REST principles"
    },
];

/**
 * Mock database for assessments
 * Contains test configurations for different technology categories
 * Each assessment includes metadata like time limits and passing scores
 */
export const assessments: Assessment[] = [
    {
        id: 1,
        name: "JavaScript Assessment",
        description: "Test your knowledge of JavaScript",
        timeLimit: 30,
        passingScore: 70,
        categoryId: 1,
        questionsCount: 10
    },
    {
        id: 2,
        name: "HTML Assessment",
        description: "Test your knowledge of HTML",
        timeLimit: 20,
        passingScore: 80,
        categoryId: 2,
        questionsCount: 15,
    },
    {
        id: 3,
        name: "CSS Assessment",
        description: "Test your knowledge of CSS",
        timeLimit: 25,
        passingScore: 75,
        categoryId: 3,
        questionsCount: 12
    },
    {
        id: 4,
        name: "React Assessment",
        description: "Test your knowledge of React",
        timeLimit: 40,
        passingScore: 85,
        categoryId: 4,
        questionsCount: 20
    },
];

/**
 * Mock database for assessment questions
 * Each question includes:
 * - Question text
 * - Multiple choice options
 * - Correct answer index
 * - Reference to parent assessment
 */
export const questions: Question[] = [
    {
        id: 1,
        text: "What is the output of the following code?\n\nconsole.log(1 + 2 + '3');",
        options: ["123", "33", "53", "5"],
        correctOption: 1,
        assessmentId: 1
    },
    {
        id: 2,
        text: "What is the output of the following code?\n\nconsole.log(typeof null);",
        options: ["object", "null", "undefined", "string"],
        correctOption: 0,
        assessmentId: 1
    },
    {
        id: 3,
        text: "What is the output of the following code?\n\nconsole.log(typeof undefined);",
        options: ["object", "null", "undefined", "string"],
        correctOption: 2,
        assessmentId: 1
    },
    {
        id: 4,
        text: "What is the output of the following code?\n\nconsole.log(typeof NaN);",
        options: ["number", "null", "undefined", "string"],
        correctOption: 0,
        assessmentId: 1
    }
];

/**
 * Storage for user data
 * Initialized as empty array to store user records dynamically
 */
export const users: User[] = [];

/**
 * Storage for assessment results
 * Tracks user performance and scores
 */
export const results: Result[] = [];

/**
 * Database object that consolidates all data collections
 * Provides central access point for data operations
 */
const Db = {categories, assessments, questions, users, results, carts, product}

export default Db;