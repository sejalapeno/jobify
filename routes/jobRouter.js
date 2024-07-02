import { Router } from "express";
const router = Router();
import { validateJobInput } from "../middleware/validationMiddleware.js";

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route("/").get(getAllJobs).post(validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
