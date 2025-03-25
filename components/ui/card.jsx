import * as React from "react";

const Card = ({ children, className }) => (
  <div className={`border rounded-lg p-4 shadow-sm bg-white ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="mb-4 font-bold">{children}</div>;
const CardTitle = ({ children }) => <h3 className="text-xl">{children}</h3>;
const CardContent = ({ children }) => <div className="mt-2">{children}</div>;

export { Card, CardHeader, CardTitle, CardContent };
