import { useState, useRef, useEffect } from 'react';

interface HoverPosition {
  left: number;
  width: number;
}

interface MenuItemRefs {
  [key: string]: HTMLDivElement | null;
}

export function useHoverPosition() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<HoverPosition>({ left: 0, width: 0 });
  const [isOverDropdown, setIsOverDropdown] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const menuItemRefs = useRef<MenuItemRefs>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleMouseEnter = (menu: string) => {
    // Clear any existing timeout to prevent dropdown from closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // For mobile, toggle the dropdown - only update state if it's changing
    if (isMobile) {
      if (activeDropdown !== menu && activeDropdown !== null) {
        // If a different dropdown is active, close it first
        setActiveDropdown(null);
        // Use setTimeout to prevent rapid state changes
        setTimeout(() => setActiveDropdown(menu), 10);
      } else {
        // Toggle current dropdown
        setActiveDropdown(prevActive => prevActive === menu ? null : menu);
      }
    } else {
      // For desktop, only update if it's a different menu
      if (activeDropdown !== menu) {
        setActiveDropdown(menu);
      }
    }

    // Only update hover position for desktop
    if (!isMobile) {
      // Update hover rectangle position based on the menu item's position
      const menuItem = menuItemRefs.current[menu];
      if (menuItem && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const menuRect = menuItem.getBoundingClientRect();

        setHoverPosition({
          left: menuRect.left - navRect.left,
          width: menuRect.width
        });
      }
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsOverDropdown(true);
    // Clear any existing timeout to prevent dropdown from closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsOverDropdown(false);
    // Close the dropdown immediately when mouse leaves the dropdown area
    if (!isMobile) {
      setActiveDropdown(null);
    }
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    // Only apply hover behavior on desktop
    if (!isMobile) {
      // Add a small delay before closing the dropdown
      timeoutRef.current = setTimeout(() => {
        // Only close if mouse is not over the dropdown content
        if (!isOverDropdown) {
          setActiveDropdown(null);
        }
      }, 100);
    }
  };

  // Reset hover position when no dropdown is active
  useEffect(() => {
    if (!activeDropdown) {
      setHoverPosition({ left: 0, width: 0 });
    }
  }, [activeDropdown]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    activeDropdown,
    hoverPosition,
    navRef,
    menuItemRefs,
    handleMouseEnter,
    handleMouseLeave,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
    isOverDropdown,
    isMobile
  };
}
