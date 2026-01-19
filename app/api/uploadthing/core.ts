import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { currentUser } from "@clerk/nextjs/server";



// Initialize Uploadthing
const f = createUploadthing();

// Define the router
export const ourFileRouter = {
  pdfUploader: f({
    pdf: { maxFileCount: 1, maxFileSize: "32MB" },
  })
    .middleware(async ({req}) => {
      // Example: get user info from clerk
      const user = await currentUser();

      if (!user) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("File uploaded successfully:", metadata.userId, file);
      console.log("File URL:", file.ufsUrl);

      return {
        userId: metadata.userId,
        file : file.ufsUrl,
      };
    }),
} satisfies FileRouter;

// Router for Uploadthing

export type OurFileRouter = typeof ourFileRouter;