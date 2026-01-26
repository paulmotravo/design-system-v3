import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, CheckCircle, Eye, Code2 } from "lucide-react";

/**
 * CodePreview - Shared component for showcases
 * Shows a preview/code toggle with copy functionality
 */
export function CodePreview({ code, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="inline-flex w-auto">
        <TabsTrigger value="preview">
          <Eye className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger value="code">
          <Code2 className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>

      <TabsContent value="preview" className="mt-4">
        <div className="flex flex-wrap gap-4">{children}</div>
      </TabsContent>

      <TabsContent value="code" className="mt-4">
        <div className="relative">
          <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-zinc-100 dark:text-zinc-200">
              <code>{code}</code>
            </pre>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default CodePreview;
