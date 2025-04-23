import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { handleContactForm } from "./controllers/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", handleContactForm);

  const httpServer = createServer(app);

  return httpServer;
}
