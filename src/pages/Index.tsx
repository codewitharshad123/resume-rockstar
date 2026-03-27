import { useState } from "react";
import { ResumeData, defaultResumeData } from "@/types/resume";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { FileText } from "lucide-react";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-3 flex items-center gap-3 shrink-0">
        <FileText className="w-5 h-5 text-accent" />
        <h1 className="text-base font-semibold text-foreground tracking-tight">
          Resume Builder
        </h1>
      </header>

      {/* Main */}
      <div className="flex-1 flex overflow-hidden">
        {/* Form Panel */}
        <div className="w-[440px] shrink-0 border-r border-border bg-card overflow-y-auto">
          <ResumeForm data={resumeData} onChange={setResumeData} />
        </div>

        {/* Preview Panel */}
        <div className="flex-1 overflow-y-auto p-8 bg-muted/50">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default Index;
