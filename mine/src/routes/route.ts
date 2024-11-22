import {Router} from "express"
import { addToCart, getAssessmentByCategoryId, getAssessmentCategories, getQuestionsByAssessmentId, sayHello, submitResponse } from "../controller/assessment";


const router = Router();



router.post("/add", addToCart)




router.get('/', sayHello);
router.get("/assessment-categories", getAssessmentCategories);

// get assessments by category
router.get("/assessments/:categoryId", getAssessmentByCategoryId);

// get questionss by assessment id
router.get("/assessments/:assessmentId/questions", getQuestionsByAssessmentId);

// post response
router.post("/assessments/:assessmentId/response", submitResponse);

// Print My result
// router.post("/assessments/:assessmentId/result", getResult);


export default router