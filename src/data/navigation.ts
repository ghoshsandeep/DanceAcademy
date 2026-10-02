export type NavItem = {
  label: string
  href: string
}

// Shared by the desktop/mobile header menu and the footer link list.
// Home is reached via the logo and enquiries via the header button.
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Lineage', href: '#lineage' },
  { label: 'Awards', href: '#achievements' },
  { label: 'Performances', href: '#performances' },
  { label: 'Gallery', href: '#gallery' },
]

export type BottomNavItem = {
  label: string
  href: string
  icon: 'home' | 'classes' | 'gallery' | 'contact'
}

// A tighter subset for the fixed mobile bottom navigation bar.
export const bottomNavItems: BottomNavItem[] = [
  { label: 'Home', href: '#home', icon: 'home' },
  { label: 'Training', href: '#training', icon: 'classes' },
  { label: 'Gallery', href: '#gallery', icon: 'gallery' },
  { label: 'Enquire', href: '#contact', icon: 'contact' },
]
