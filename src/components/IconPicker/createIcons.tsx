import React from 'react'

type LucideIconComponent = React.FC<{
  className?: string
  size?: number
  strokeWidth?: number
  color?: string
}>

const iconCache: Record<string, LucideIconComponent> = {}

export function createLucideIcons(): Record<string, LucideIconComponent> {
  if (Object.keys(iconCache).length > 0) {
    return iconCache
  }

  // Icon names that match lucide-react
  const iconNames = [
    'Building2', 'Building', 'Home', 'Factory', 'Warehouse', 'HardHat', 'Wrench', 'Hammer', 'Screwdriver', 'Saw', 'Drill', 'Tool', 'Construction', 'Bricks', 'Wall', 'Door', 'Window', 'Archway', 'Columns', 'Landmark', 'TowerControl', 'Crane', 'Truck', 'Loader', 'Excavator',
    'Briefcase', 'Store', 'ShoppingBag', 'ShoppingCart', 'Package', 'Box', 'Boxes', 'Clipboard', 'FileText', 'FileCheck', 'FilePlus', 'FolderOpen', 'Folder', 'Calendar', 'Clock', 'Timer', 'Target', 'TrendingUp', 'BarChart', 'PieChart', 'LineChart', 'Activity', 'Award', 'Medal', 'Star', 'Trophy', 'Crown', 'Gem', 'Diamond',
    'Mail', 'MessageSquare', 'MessageCircle', 'Phone', 'PhoneCall', 'Video', 'Send', 'Share2', 'Link', 'Link2', 'ExternalLink', 'Globe', 'MapPin', 'Navigation', 'Compass', 'Locate',
    'Users', 'User', 'UserPlus', 'UserCheck', 'UserCog', 'Group', 'Team', 'Handshake', 'UserGroup',
    'Settings', 'Settings2', 'SlidersHorizontal', 'SlidersVertical', 'ToggleLeft', 'ToggleRight', 'Cog',
    'TreePine', 'TreeDeciduous', 'Leaf', 'Flower', 'Seedling', 'Sprout', 'Sun', 'Moon', 'Cloud', 'CloudRain', 'CloudSnow', 'CloudLightning', 'Droplets', 'Drop', 'Water', 'Waves', 'Mountain', 'MountainSnow',
    'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ChevronRight', 'ChevronLeft', 'ChevronUp', 'ChevronDown', 'Menu', 'X', 'Plus', 'Minus', 'Check', 'CheckCircle', 'CheckCircle2', 'Circle', 'CircleDot', 'Square', 'Triangle', 'Hexagon',
    'File', 'FileText', 'FileImage', 'FileVideo', 'FileAudio', 'FileCode', 'FilePdf', 'FileSpreadsheet', 'Image', 'Video', 'Music', 'Film', 'Camera', 'Photos',
    'DollarSign', 'EuroSign', 'PoundSign', 'YenSign', 'CreditCard', 'Banknote', 'Coins', 'Wallet', 'PiggyBank', 'Receipt', 'Invoice', 'Calculator',
    'Code', 'Code2', 'Terminal', 'Database', 'Server', 'HardDrive', 'Cpu', 'MemoryStick', 'Monitor', 'Laptop', 'Tablet', 'Smartphone', 'Watch', 'Headphones', 'Keyboard', 'Mouse',
    'Heart', 'ThumbsUp', 'ThumbsDown', 'Flag', 'Bookmark', 'Tag', 'Tags', 'Gift', 'Sparkles', 'Zap', 'Bolt', 'Flashlight', 'Search', 'ZoomIn', 'ZoomOut', 'Filter', 'Funnel', 'SortAsc', 'SortDesc', 'RefreshCw', 'RotateCw', 'RotateCcw',
  ]

  // Create placeholder components that will be replaced by lucide-react at runtime
  for (const name of iconNames) {
    iconCache[name] = function PlaceholderIcon({
      className = '',
      size = 24,
      strokeWidth = 2,
      color = 'currentColor',
      ...props
    }) {
      return (
        <svg
          className={className}
          width={size}
          height={size}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          viewBox="0 0 24 24"
          {...props}
          data-lucide={name}
        />
      )
    }
  }

  return iconCache
}

export function getLucideIcon(name: string): LucideIconComponent | null {
  const icons = createLucideIcons()
  return icons[name] || null
}