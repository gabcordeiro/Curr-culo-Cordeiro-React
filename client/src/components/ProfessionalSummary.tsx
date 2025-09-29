import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfessionalSummaryProps {
  summary: string;
}

export default function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <Card className="hover-elevate" data-testid="summary-section">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Resumo Profissional</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed" data-testid="text-summary">
          {summary}
        </p>
      </CardContent>
    </Card>
  );
}