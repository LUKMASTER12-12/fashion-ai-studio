import * as fal from "@fal-ai/serverless-client";

// Initialize the fal client with your API key
// The API key should be stored in an environment variable in production
fal.config({
  credentials: import.meta.env.VITE_FAL_KEY || "fal_key_placeholder",
});

// Log to verify the API key is being loaded correctly
console.log(
  "FAL API Key configured:",
  import.meta.env.VITE_FAL_KEY ? "Key is set" : "Key is not set",
);

// Interface for the try-on request parameters
export interface TryOnRequest {
  modelImage: string; // URL of the model image
  garmentImage: string; // URL of the garment/product image
}

// Interface for the try-on response
export interface TryOnResponse {
  image: string; // URL or base64 of the generated image
  id: string; // ID of the generation
}

/**
 * Performs a virtual try-on using the fal.ai API
 * @param params The parameters for the try-on request
 * @returns Promise with the try-on result
 */
export async function performTryOn(
  params: TryOnRequest,
): Promise<TryOnResponse> {
  try {
    // Call the fal.ai API with the fashn/tryon model
    const result = await fal.run("fal-ai/fashn-tryon", {
      input: {
        model_image: params.modelImage,
        garment_image: params.garmentImage,
      },
    });

    // Return the processed result
    return {
      image: result.output.image,
      id: result.id,
    };
  } catch (error) {
    console.error("Error performing try-on:", error);
    throw error;
  }
}

/**
 * Checks the status of a try-on request
 * @param id The ID of the try-on request
 * @returns Promise with the current status
 */
export async function checkTryOnStatus(id: string): Promise<any> {
  try {
    const status = await fal.status(id);
    return status;
  } catch (error) {
    console.error("Error checking try-on status:", error);
    throw error;
  }
}
