import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface AuthCardProps {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function AuthCard({
  children,
  title,
  description,
  className,
}: AuthCardProps) {
  return (
    <Card className={`w-full max-w-md mx-auto ${className || ""}`}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-2xl">{title}</CardTitle>}
          {description && (
            <CardDescription className="text-sm text-muted-foreground">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  )
}