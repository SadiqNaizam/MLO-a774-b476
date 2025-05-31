import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  BarChartBig,
  Users,
  ShoppingCart,
  Bitcoin,
  FolderKanban,
  Image as ImageIcon,
  Briefcase,
  FileText,
  AppWindow,
  LayoutTemplate,
  Lock,
  StickyNote,
  Rocket,
  Component,
  Puzzle,
  LayoutGrid,
  ListChecks,
  ChevronDown
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  badge?: {
    text: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
    className?: string;
  };
  children?: NavItem[];
}

const menuItems: NavItem[] = [
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: LayoutDashboard,
    children: [
      { id: 'analytics', label: 'Analytics', icon: BarChartBig, href: '#' },
      { id: 'crm', label: 'CRM', icon: Users, href: '#', badge: { text: 'Active', variant: 'outline', className: 'text-primary border-primary ml-auto' } },
      { id: 'ecommerce', label: 'Ecommerce', icon: ShoppingCart, href: '#' },
      { id: 'crypto', label: 'Crypto', icon: Bitcoin, href: '#' },
      { id: 'projects', label: 'Projects', icon: FolderKanban, href: '#' },
      { id: 'nft', label: 'NFT', icon: ImageIcon, href: '#' },
      { id: 'job', label: 'Job', icon: Briefcase, href: '#' },
      { id: 'blog', label: 'Blog', icon: FileText, href: '#', badge: { text: 'New', variant: 'default', className: 'bg-velzon-accent-green text-white ml-auto' } },
    ],
  },
  { id: 'apps', label: 'Apps', icon: AppWindow, href: '#' }, // Example: Can be expanded with children
  {
    id: 'layouts',
    label: 'Layouts',
    icon: LayoutTemplate,
    href: '#',
    badge: { text: 'Hot', variant: 'destructive', className: 'bg-velzon-accent-red text-white ml-auto' },
  },
];

const pagesItems: NavItem[] = [
  { id: 'authentication', label: 'Authentication', icon: Lock, href: '#' },
  { id: 'pages', label: 'Pages', icon: StickyNote, href: '#' },
  { id: 'landing', label: 'Landing', icon: Rocket, href: '#' },
];

const componentsItems: NavItem[] = [
  { id: 'base-ui', label: 'Base UI', icon: Component, href: '#' },
  { id: 'advance-ui', label: 'Advance UI', icon: Puzzle, href: '#' },
  { id: 'widgets', label: 'Widgets', icon: LayoutGrid, href: '#' },
  { id: 'forms', label: 'Forms', icon: ListChecks, href: '#' },
];

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const renderNavItems = (items: NavItem[], parentId: string) => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <AccordionItem value={`${parentId}-${item.id}`} key={item.id} className="border-b-0">
            <AccordionTrigger className="hover:no-underline hover:bg-sidebar-foreground/10 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/80 hover:text-sidebar-foreground">
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                {item.label}
                {item.badge && (
                  <Badge variant={item.badge.variant} className={cn('ml-auto', item.badge.className)}>
                    {item.badge.text}
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0 pl-4">
              {item.children.map((child) => (
                <a
                  key={child.id}
                  href={child.href || '#'}
                  className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-foreground/10 rounded-md"
                >
                  <child.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                  {child.label}
                  {child.badge && (
                    <Badge variant={child.badge.variant} className={cn('h-5', child.badge.className)}>
                      {child.badge.text}
                    </Badge>
                  )}
                </a>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      }
      return (
        <a
          key={item.id}
          href={item.href || '#'}
          className="flex items-center px-3 py-2 text-sm font-medium text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-foreground/10 rounded-md"
        >
          <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
          {item.label}
          {item.badge && (
            <Badge variant={item.badge.variant} className={cn('h-5', item.badge.className)}>
              {item.badge.text}
            </Badge>
          )}
        </a>
      );
    });
  };

  return (
    <aside className={cn('w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen fixed top-0 left-0 z-20', className)}>
      <div className="h-16 flex items-center justify-center border-b border-sidebar-foreground/10">
        <h1 className="text-2xl font-bold text-white">VELZON</h1>
      </div>

      <div className="p-4 flex items-center space-x-3 border-b border-sidebar-foreground/10">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://i.pravatar.cc/40?u=annaadame" alt="Anna Adame" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-white">Anna Adame</p>
          <div className="flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-1.5"></span>
            <p className="text-xs text-sidebar-foreground/70">Online</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col space-y-1">
          <h3 className="px-3 py-2 text-xs font-semibold uppercase text-sidebar-foreground/50">Menu</h3>
          <Accordion type="multiple" className="w-full space-y-1">
            {renderNavItems(menuItems, 'menu')}
          </Accordion>

          <h3 className="px-3 pt-4 pb-2 text-xs font-semibold uppercase text-sidebar-foreground/50">Pages</h3>
          {renderNavItems(pagesItems, 'pages')}
          
          <h3 className="px-3 pt-4 pb-2 text-xs font-semibold uppercase text-sidebar-foreground/50">Components</h3>
          {renderNavItems(componentsItems, 'components')}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default SidebarNav;
