import { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  const { personal, experience, education, skills } = data;
  const hasContent =
    personal.fullName || experience.length > 0 || education.length > 0 || skills.length > 0;

  return (
    <div className="bg-[hsl(var(--resume-bg))] shadow-2xl rounded-sm mx-auto max-w-[640px] min-h-[842px] p-10 text-[hsl(var(--foreground))] font-['Georgia',serif]">
      {!hasContent ? (
        <div className="flex items-center justify-center h-[600px] text-muted-foreground text-center">
          <div>
            <p className="text-lg font-semibold mb-1">Your resume preview</p>
            <p className="text-sm">Start filling in the form to see it come to life</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header */}
          {(personal.fullName || personal.title) && (
            <div className="text-center border-b-2 border-[hsl(var(--resume-accent))] pb-5">
              {personal.fullName && (
                <h1 className="text-2xl font-bold tracking-wide uppercase text-[hsl(var(--resume-heading))]">
                  {personal.fullName}
                </h1>
              )}
              {personal.title && (
                <p className="text-sm mt-1 tracking-widest uppercase text-muted-foreground">
                  {personal.title}
                </p>
              )}
              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground flex-wrap">
                {personal.email && (
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {personal.email}
                  </span>
                )}
                {personal.phone && (
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {personal.phone}
                  </span>
                )}
                {personal.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {personal.location}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Summary */}
          {personal.summary && (
            <div>
              <SectionTitle>Summary</SectionTitle>
              <p className="text-xs leading-relaxed">{personal.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && experience.some((e) => e.company || e.position) && (
            <div>
              <SectionTitle>Experience</SectionTitle>
              <div className="space-y-4">
                {experience
                  .filter((e) => e.company || e.position)
                  .map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-sm font-bold">{exp.position}</span>
                          {exp.company && (
                            <span className="text-sm text-muted-foreground"> — {exp.company}</span>
                          )}
                        </div>
                        {(exp.startDate || exp.endDate) && (
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ""}
                          </span>
                        )}
                      </div>
                      {exp.description && (
                        <p className="text-xs leading-relaxed mt-1">{exp.description}</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && education.some((e) => e.school || e.degree) && (
            <div>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-3">
                {education
                  .filter((e) => e.school || e.degree)
                  .map((edu) => (
                    <div key={edu.id} className="flex justify-between items-baseline">
                      <div>
                        <span className="text-sm font-bold">
                          {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                        </span>
                        {edu.school && (
                          <span className="text-sm text-muted-foreground"> — {edu.school}</span>
                        )}
                      </div>
                      {edu.startDate && (
                        <span className="text-xs text-muted-foreground">{edu.startDate}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <SectionTitle>Skills</SectionTitle>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--resume-accent)/0.1)] text-[hsl(var(--resume-heading))] border border-[hsl(var(--resume-accent)/0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--resume-accent))] border-b border-border pb-1 mb-3">
    {children}
  </h2>
);

export default ResumePreview;
