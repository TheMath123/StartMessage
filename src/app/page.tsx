import { Suspense } from "react";
import { CreateLinkForm } from "./components/create-link-form";
import { SkeletonCard } from "@/components/loading/SkeletonCard";

export default function CreateLink() {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <CreateLinkForm />
    </Suspense>
  );
}
