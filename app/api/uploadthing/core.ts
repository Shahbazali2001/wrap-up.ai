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
    .middleware(async () => {
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
      console.log("User Id :", metadata.userId);

      return {
        userId: metadata.userId,
        fileUrl: file.ufsUrl,
        fileName: file.name,
      };
    }),
} satisfies FileRouter;

// Router for Uploadthing

export type OurFileRouter = typeof ourFileRouter;