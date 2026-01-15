import { createUploadthing, type FileRouter } from "uploadthing/server";

const file = createUploadthing();

export const ourFileRouter = {
    pdfUploader : file( { pdf : { maxFileCount: 1, maxFileSize: "32MB" }}).middleware(
        async ({ req }) => {
            // getting user info
        }
    ).onUploadComplete(
        async ({metadata, file}) => {
        console.log(
            "File uploaded successfully:",
            metadata.userId,
            file
        );

        return {
            userId: metadata.userId,
            file
        }
    })
} satisfies FileRouter;


export type OurFileRouter = typeof ourFileRouter;