import { createContext, useContext, useState, type ReactNode } from "react";

type TabsContextValue = {
  activeValue: string;
  setActiveValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

type TabsProps = {
  defaultValue: string;
  children: ReactNode;
  className?: string;
};

function Tabs({ defaultValue, children, className = "" }: TabsProps) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <TabsContext value={{ activeValue, setActiveValue }}>
      <div className={className}>{children}</div>
    </TabsContext>
  );
}

function useTabsContext() {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error("Tabs.Trigger and Tabs.Panel must be used inside <Tabs>");
  }

  return context;
}

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

function TabsTrigger({ value, children, className = "" }: TabsTriggerProps) {
  const { activeValue, setActiveValue } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setActiveValue(value)}
      className={className}
    >
      {children}
    </button>
  );
}

type TabsListProps = {
  children: ReactNode;
  className?: string;
};

function TabsList({ children, className = "" }: TabsListProps) {
  return (
    <div role="tablist" className={className}>
      {children}
    </div>
  );
}

type TabsPanelProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

function TabsPanel({ value, children, className = "" }: TabsPanelProps) {
  const { activeValue } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div role="tabpanel" className={className}>
      {children}
    </div>
  );
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Panel = TabsPanel;

export default Tabs;
