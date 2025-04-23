import { Request, Response } from "express";
import { z } from "zod";
import { ZodError } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function handleContactForm(req: Request, res: Response) {
  try {
    // Validate the request body
    const validatedData = contactSchema.parse(req.body);
    
    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Possibly trigger other workflows
    
    // For this implementation, we'll just simulate success
    console.log("Contact form submission:", validatedData);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: "Your message has been received. I'll get back to you soon!" 
    });
    
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed", 
        errors: error.errors 
      });
    }
    
    // Handle other errors
    console.error("Contact form error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Something went wrong processing your request" 
    });
  }
}
