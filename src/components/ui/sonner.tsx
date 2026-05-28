import React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "rgba(240, 253, 244, 0.95)",
          "--normal-text": "#14532d",
          "--normal-border": "#bbf7d0",
          "--success-bg": "rgba(240, 253, 244, 0.95)",
          "--success-text": "#14532d",
          "--success-border": "#bbf7d0",
          "--info-bg": "rgba(240, 253, 244, 0.95)",
          "--info-text": "#14532d",
          "--info-border": "#bbf7d0",
          "--error-bg": "rgba(240, 253, 244, 0.95)",
          "--error-text": "#14532d",
          "--error-border": "#bbf7d0",
          "--warning-bg": "rgba(240, 253, 244, 0.95)",
          "--warning-text": "#14532d",
          "--warning-border": "#bbf7d0",
          "--border-radius": "1rem",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast bg-green-50/95 text-green-900 border-green-200 backdrop-blur-md shadow-2xl font-bold font-sans",
          success: "bg-green-50/95 text-green-900 border-green-200",
          error: "bg-green-50/95 text-green-900 border-green-200",
          info: "bg-green-50/95 text-green-900 border-green-200",
          warning: "bg-green-50/95 text-green-900 border-green-200",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
