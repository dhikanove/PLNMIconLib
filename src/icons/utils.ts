export function processSvgContent(
  svgContent: string,
  options: {
    color?: string
    colors?: string[]
    size?: string | number
    viewBox?: string
  } = {}
): string {
  let processed = svgContent

  if (options.color && !options.colors) {
    processed = processed.replace(/fill="currentColor"/g, `fill="${options.color}"`)
    processed = processed.replace(/currentColor/g, options.color)
  }

  if (options.colors && options.colors.length > 0) {
    const fillRegex = /fill="[^"]*"/g
    let colorIndex = 0
    processed = processed.replace(fillRegex, (match) => {
      if (match.includes('none')) return match
      const color = options.colors![colorIndex % options.colors!.length]
      colorIndex++
      return `fill="${color}"`
    })
  }

  if (options.viewBox) {
    processed = processed.replace(/viewBox="[^"]*"/, `viewBox="${options.viewBox}"`)
  }

  return processed
}

export function extractViewBox(svgContent: string): string | undefined {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/)
  return viewBoxMatch ? viewBoxMatch[1] : undefined
}

export function getSvgSize(size: string | number): string {
  if (typeof size === 'number') {
    return `${size}px`
  }
  return size
}

export async function loadSvgFromUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to load SVG from URL: ${url}`)
    }
    return await response.text()
  } catch (error) {
    console.error('Error loading SVG from URL:', error)
    throw error
  }
}
