import NotFoundDialogue from "@/components/notFoundDialogue/notFoundDialogue";

export default function NotFoundPage() {
    return <div className="w-full h-full flex justify-center pt-50">
        <div className="flex flex-col justify-center items-center h-max">
            <h1 className="text-5xl font-bold mb-15">NOT FOUND</h1>
            <NotFoundDialogue />
        </div>
    </div>
};