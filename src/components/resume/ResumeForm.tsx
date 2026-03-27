import { ResumeData, ExperienceItem, EducationItem } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Briefcase, GraduationCap, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
  const updatePersonal = (field: string, value: string) => {
    onChange({ ...data, personal: { ...data.personal, [field]: value } });
  };

  const addExperience = () => {
    const item: ExperienceItem = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange({ ...data, experience: [...data.experience, item] });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      experience: data.experience.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    });
  };

  const removeExperience = (id: string) => {
    onChange({ ...data, experience: data.experience.filter((e) => e.id !== id) });
  };

  const addEducation = () => {
    const item: EducationItem = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    };
    onChange({ ...data, education: [...data.education, item] });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      education: data.education.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({ ...data, education: data.education.filter((e) => e.id !== id) });
  };

  const updateSkills = (value: string) => {
    onChange({ ...data, skills: value.split(",").map((s) => s.trim()).filter(Boolean) });
  };

  return (
    <div className="space-y-8 p-6 overflow-y-auto h-full">
      {/* Personal Info */}
      <Section icon={<User className="w-4 h-4" />} title="Personal Information">
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Full Name"
            value={data.personal.fullName}
            onChange={(e) => updatePersonal("fullName", e.target.value)}
            className="col-span-2"
          />
          <Input
            placeholder="Job Title"
            value={data.personal.title}
            onChange={(e) => updatePersonal("title", e.target.value)}
            className="col-span-2"
          />
          <Input
            placeholder="Email"
            value={data.personal.email}
            onChange={(e) => updatePersonal("email", e.target.value)}
          />
          <Input
            placeholder="Phone"
            value={data.personal.phone}
            onChange={(e) => updatePersonal("phone", e.target.value)}
          />
          <Input
            placeholder="Location"
            value={data.personal.location}
            onChange={(e) => updatePersonal("location", e.target.value)}
            className="col-span-2"
          />
          <Textarea
            placeholder="Professional summary..."
            value={data.personal.summary}
            onChange={(e) => updatePersonal("summary", e.target.value)}
            className="col-span-2 min-h-[80px]"
          />
        </div>
      </Section>

      {/* Experience */}
      <Section icon={<Briefcase className="w-4 h-4" />} title="Experience">
        <AnimatePresence>
          {data.experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative border border-border rounded-lg p-4 space-y-3"
            >
              <button
                onClick={() => removeExperience(exp.id)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                />
                <Input
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                />
                <Input
                  placeholder="Start Date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                />
                <Input
                  placeholder="End Date"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                />
              </div>
              <Textarea
                placeholder="Describe your role and achievements..."
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                className="min-h-[60px]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <Button variant="outline" size="sm" onClick={addExperience} className="w-full">
          <Plus className="w-4 h-4 mr-2" /> Add Experience
        </Button>
      </Section>

      {/* Education */}
      <Section icon={<GraduationCap className="w-4 h-4" />} title="Education">
        <AnimatePresence>
          {data.education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative border border-border rounded-lg p-4 space-y-3"
            >
              <button
                onClick={() => removeEducation(edu.id)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                />
                <Input
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                />
                <Input
                  placeholder="Field of Study"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                />
                <Input
                  placeholder="Start - End"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <Button variant="outline" size="sm" onClick={addEducation} className="w-full">
          <Plus className="w-4 h-4 mr-2" /> Add Education
        </Button>
      </Section>

      {/* Skills */}
      <Section icon={<Sparkles className="w-4 h-4" />} title="Skills">
        <Input
          placeholder="React, TypeScript, Node.js (comma-separated)"
          value={data.skills.join(", ")}
          onChange={(e) => updateSkills(e.target.value)}
        />
      </Section>
    </div>
  );
};

const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
      {icon} {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

export default ResumeForm;
