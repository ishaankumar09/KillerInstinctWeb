import "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string
          alt?: string
          "auto-rotate"?: boolean
          "camera-controls"?: boolean
          "interaction-policy"?: string
          "environment-image"?: string
          exposure?: string
          "shadow-intensity"?: string
          "shadow-softness"?: string
        },
        HTMLElement
      >
    }
  }
}

export {}

