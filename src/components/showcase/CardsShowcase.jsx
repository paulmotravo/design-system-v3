import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  TrendingUp,
  Users,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  Star,
  Award,
  Upload,
  X,
} from "lucide-react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  CodePreview,
  SectionCard,
  SectionTitle,
  ShowcaseHeader,
  PhilosophyCard,
} from "./shared";

// Publishing Channel Cards Demo Component
function PublishingChannelCardsDemo() {
  const [channels, setChannels] = useState({
    instagram: true,
    facebook: true,
    twitter: false,
    linkedin: false,
  });

  const channelConfig = {
    instagram: {
      name: "Instagram",
      types: ["Feed", "Story"],
      icon: (
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      bgColor:
        "bg-linear-to-br from-platform-instagram-from via-platform-instagram-via to-platform-instagram-to",
    },
    facebook: {
      name: "Facebook",
      types: ["Post", "Story"],
      icon: (
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgColor: "bg-platform-facebook",
    },
    twitter: {
      name: "Twitter",
      types: ["Tweet"],
      icon: (
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      bgColor:
        "bg-linear-to-br from-platform-twitter-from to-platform-twitter-to",
    },
    linkedin: {
      name: "LinkedIn",
      types: ["Post"],
      icon: (
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      bgColor: "bg-platform-linkedin",
    },
  };

  const toggleChannel = (channel) => {
    setChannels((prev) => ({ ...prev, [channel]: !prev[channel] }));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.keys(channelConfig).map((channelKey) => {
        const config = channelConfig[channelKey];
        const selected = channels[channelKey];

        return (
          <Card
            key={channelKey}
            variant="selectable"
            data-selected={selected}
            className="p-4"
            onClick={() => toggleChannel(channelKey)}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-lg ${config.bgColor} flex items-center justify-center shrink-0`}
              >
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground">
                  {config.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {config.types.join(" + ")}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

// Media Upload Card Demo Component
function MediaUploadCardDemo() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Media</h3>
            <p className="text-sm text-muted-foreground">
              Upload images or videos
            </p>
          </div>
          <Button variant="outline" size="sm">
            Customize per Channel
          </Button>
        </div>

        {/* Upload Zone */}
        <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            id="media-upload-demo"
            onChange={handleFileUpload}
          />
          <label htmlFor="media-upload-demo" className="cursor-pointer">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <div className="text-sm font-semibold text-foreground">
              Click to upload or drag and drop
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              PNG, JPG, GIF, MP4 up to 10MB
            </div>
          </label>
        </div>

        {/* Uploaded Files Grid */}
        {files.length > 0 && (
          <div className="grid grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div key={index} className="relative aspect-square group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

// Text Editor Card Demo - Basic Version
function TextEditorCardBasicDemo() {
  const [textVersions, setTextVersions] = useState([""]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Post Text</h3>
            <p className="text-sm text-muted-foreground">
              Write your caption and hashtags
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Version Navigation */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() =>
                  setCurrentVersionIndex(Math.max(0, currentVersionIndex - 1))
                }
                disabled={
                  currentVersionIndex === 0 || textVersions.length === 1
                }
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>
              <span className="text-xs text-muted-foreground font-medium min-w-12 text-center">
                v {currentVersionIndex + 1}/{textVersions.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() =>
                  setCurrentVersionIndex(
                    Math.min(textVersions.length - 1, currentVersionIndex + 1),
                  )
                }
                disabled={
                  currentVersionIndex === textVersions.length - 1 ||
                  textVersions.length === 1
                }
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
            <Button variant="outline" size="sm">
              Customize per Channel
            </Button>
          </div>
        </div>

        <div className="relative">
          <Textarea
            value={textVersions[currentVersionIndex]}
            onChange={(e) => {
              const newVersions = [...textVersions];
              newVersions[currentVersionIndex] = e.target.value;
              setTextVersions(newVersions);
            }}
            placeholder="Write your post text here..."
            className="min-h-[200px]"
          />
          <Badge
            variant="counter-safe"
            className="absolute bottom-2 right-2 text-xs"
          >
            {textVersions[currentVersionIndex].length}/2200
          </Badge>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Copilot
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const generated = "🚀 AI-generated content here...";
              setTextVersions([...textVersions, generated]);
              setCurrentVersionIndex(textVersions.length);
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Generate
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Text Editor Card Demo - Multi-Channel Version
function MultiChannelTextEditorCardDemo() {
  const [textVersions, setTextVersions] = useState([""]);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  const platformLimits = {
    instagram: { name: "Instagram", limit: 2200, icon: "📷" },
    facebook: { name: "Facebook", limit: 63206, icon: "👍" },
    twitter: { name: "Twitter", limit: 280, icon: "🐦" },
  };

  const getCounterVariant = (length, limit) => {
    const percentage = (length / limit) * 100;
    if (percentage >= 100) return "counter-over";
    if (percentage >= 90) return "counter-warning";
    return "counter-safe";
  };

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Post Text</h3>
            <p className="text-sm text-muted-foreground">
              One text, tracked across all platforms
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Version Navigation */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() =>
                  setCurrentVersionIndex(Math.max(0, currentVersionIndex - 1))
                }
                disabled={
                  currentVersionIndex === 0 || textVersions.length === 1
                }
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>
              <span className="text-xs text-muted-foreground font-medium min-w-12 text-center">
                v {currentVersionIndex + 1}/{textVersions.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() =>
                  setCurrentVersionIndex(
                    Math.min(textVersions.length - 1, currentVersionIndex + 1),
                  )
                }
                disabled={
                  currentVersionIndex === textVersions.length - 1 ||
                  textVersions.length === 1
                }
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
            <Button variant="outline" size="sm">
              Customize per Channel
            </Button>
          </div>
        </div>

        <div className="relative">
          <Textarea
            value={textVersions[currentVersionIndex]}
            onChange={(e) => {
              const newVersions = [...textVersions];
              newVersions[currentVersionIndex] = e.target.value;
              setTextVersions(newVersions);
            }}
            placeholder="Write your post text here..."
            className="min-h-[200px] pb-12"
          />

          {/* Multiple counters side by side */}
          <div className="absolute bottom-2 right-2 flex gap-2">
            {Object.keys(platformLimits).map((platform) => {
              const config = platformLimits[platform];
              const currentText = textVersions[currentVersionIndex];
              return (
                <Badge
                  key={platform}
                  variant={getCounterVariant(currentText.length, config.limit)}
                  className="text-xs"
                  title={config.name}
                >
                  {config.icon} {currentText.length}/{config.limit}
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Copilot
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const generated =
                "🚀 Exciting news! Check out our latest features...";
              setTextVersions([...textVersions, generated]);
              setCurrentVersionIndex(textVersions.length);
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Generate
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Channel Selector Card Demo Component
function ChannelSelectorCardDemo() {
  const [channelMode, setChannelMode] = useState("all");
  const [selectedChannels, setSelectedChannels] = useState({
    instagram_feed: true,
    instagram_story: true,
    facebook_post: true,
    facebook_story: true,
    twitter: false,
    linkedin: false,
  });

  const channelConfig = {
    instagram_feed: {
      name: "Instagram",
      type: "Feed",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        </svg>
      ),
      bgColor:
        "bg-linear-to-br from-platform-instagram-from via-platform-instagram-via to-platform-instagram-to",
    },
    instagram_story: {
      name: "Instagram",
      type: "Story",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        </svg>
      ),
      bgColor:
        "bg-linear-to-br from-platform-instagram-from via-platform-instagram-via to-platform-instagram-to",
    },
    facebook_post: {
      name: "Facebook",
      type: "Post",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgColor: "bg-platform-facebook",
    },
    facebook_story: {
      name: "Facebook",
      type: "Story",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgColor: "bg-platform-facebook",
    },
    twitter: {
      name: "Twitter",
      type: "Tweet",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      bgColor:
        "bg-linear-to-br from-platform-twitter-from to-platform-twitter-to",
    },
    linkedin: {
      name: "LinkedIn",
      type: "Post",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      bgColor: "bg-platform-linkedin",
    },
  };

  const toggleChannel = (channel) => {
    setSelectedChannels((prev) => ({ ...prev, [channel]: !prev[channel] }));
  };

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">Select Channels</h3>
          <p className="text-sm text-muted-foreground">
            Choose where to publish
          </p>
        </div>

        <RadioGroup
          value={channelMode}
          onValueChange={setChannelMode}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="channel-all" />
            <Label htmlFor="channel-all" className="cursor-pointer">
              All Channels
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="select" id="channel-select" />
            <Label htmlFor="channel-select" className="cursor-pointer">
              Select Channels
            </Label>
          </div>
        </RadioGroup>

        {channelMode === "select" && (
          <div className="grid grid-cols-2 gap-3">
            {Object.keys(channelConfig).map((channelKey) => {
              const config = channelConfig[channelKey];
              const selected = selectedChannels[channelKey];

              return (
                <Card
                  key={channelKey}
                  variant="selectable"
                  data-selected={selected}
                  className="p-4"
                  onClick={() => toggleChannel(channelKey)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${config.bgColor} flex items-center justify-center`}
                    >
                      {config.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {config.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {config.type}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

export default function CardsShowcase() {
  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Cards"
        description="Versatile container components for organizing content with multiple visual styles"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Card Design Philosophy"
          variant="soft-purple"
        >
          <p>
            → <strong>Visual Hierarchy:</strong> Cards organize content, buttons
            drive action - they don't compete
          </p>
          <p>
            → <strong>Soft Colors:</strong> Pastels create gentle visual
            groupings without overwhelming
          </p>
          <p>
            → <strong>Purpose-Driven:</strong> Each variant serves a specific
            content organization need
          </p>
          <p>
            → <strong>Gradient = Premium:</strong> Only for premium features,
            agency content, and upgrades
          </p>
          <p>
            → <strong>Hover Feedback:</strong> Subtle elevation changes provide
            interactive confirmation
          </p>
        </PhilosophyCard>

        {/* Basic Variants */}
        <SectionCard>
          <SectionTitle>Basic Variants</SectionTitle>

          <CodePreview
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

<Card variant="default">
  <CardHeader>
    <CardTitle>Default</CardTitle>
    <CardDescription>Clean white with subtle border</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Standard content container.</p>
  </CardContent>
</Card>

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated</CardTitle>
    <CardDescription>Enhanced shadow prominence</CardDescription>
  </CardHeader>
</Card>

<Card variant="flat">
  <CardHeader>
    <CardTitle>Flat</CardTitle>
    <CardDescription>Subtle gray minimal shadow</CardDescription>
  </CardHeader>
</Card>

<Card variant="outline">
  <CardHeader>
    <CardTitle>Outline</CardTitle>
    <CardDescription>Emphasized brand border</CardDescription>
  </CardHeader>
</Card>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="text-lg">Default</CardTitle>
                  <CardDescription>
                    Clean white with subtle border
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Standard content container. Use for most general content.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-lg">Elevated</CardTitle>
                  <CardDescription>Enhanced shadow prominence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Important sections that need to stand out more.
                  </p>
                </CardContent>
              </Card>

              <Card variant="flat">
                <CardHeader>
                  <CardTitle className="text-lg">Flat</CardTitle>
                  <CardDescription>Subtle gray minimal shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Secondary information, background sections.
                  </p>
                </CardContent>
              </Card>

              <Card variant="outline">
                <CardHeader>
                  <CardTitle className="text-lg">Outline</CardTitle>
                  <CardDescription>Emphasized brand border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Highlight selected items or focus attention.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Soft Purple & Coral */}
        <SectionCard>
          <SectionTitle>Pastell Variants - Primary & Secondary</SectionTitle>

          <CodePreview
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Users } from 'lucide-react'

<Card variant="soft-purple">
  <CardHeader>
    <div className="flex items-center justify-between mb-2">
      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
        <Star className="w-5 h-5 text-white" />
      </div>
      <Badge variant="purple">Primary</Badge>
    </div>
    <CardTitle>Soft Purple</CardTitle>
    <CardDescription>Primary brand features</CardDescription>
  </CardHeader>
  <CardContent>
    <p>→ Main features</p>
    <p>→ Primary information</p>
  </CardContent>
</Card>

<Card variant="soft-coral">
  <CardHeader>
    <div className="flex items-center justify-between mb-2">
      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
        <Users className="w-5 h-5 text-white" />
      </div>
      <Badge variant="coral">Secondary</Badge>
    </div>
    <CardTitle>Soft Coral</CardTitle>
    <CardDescription>Alternative features</CardDescription>
  </CardHeader>
</Card>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="soft-purple">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="purple">Primary</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Purple</CardTitle>
                  <CardDescription>Primary brand features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>→ Main features</p>
                    <p>→ Primary information</p>
                    <p>→ Important sections</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="soft-coral">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="coral">Secondary</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Coral</CardTitle>
                  <CardDescription>Alternative features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>→ Alternative features</p>
                    <p>→ Community content</p>
                    <p>→ Engagement metrics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Soft Blue, Green, Pink */}
        <SectionCard>
          <SectionTitle>Pastell Variants - Info, Success, Accent</SectionTitle>

          <CodePreview
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Award, Heart } from 'lucide-react'

<Card variant="soft-blue">
  <CardHeader>
    <CardTitle>Soft Blue</CardTitle>
    <CardDescription>Informational content</CardDescription>
  </CardHeader>
</Card>

<Card variant="soft-green">
  <CardHeader>
    <CardTitle>Soft Green</CardTitle>
    <CardDescription>Success & positive metrics</CardDescription>
  </CardHeader>
</Card>

<Card variant="soft-pink">
  <CardHeader>
    <CardTitle>Soft Pink</CardTitle>
    <CardDescription>Alternative accent</CardDescription>
  </CardHeader>
</Card>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="soft-blue">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-info rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="soft-blue">Info</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Blue</CardTitle>
                  <CardDescription>Informational content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>→ Analytics & stats</p>
                    <p>→ Information blocks</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="soft-green">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="green">Success</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Green</CardTitle>
                  <CardDescription>Success & positive metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>→ Success messages</p>
                    <p>→ Positive metrics</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="soft-pink">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="pink">Accent</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Pink</CardTitle>
                  <CardDescription>Alternative accent</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>→ Engagement features</p>
                    <p>→ Social content</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Premium Variants */}
        <SectionCard>
          <SectionTitle>Premium/Special Variants</SectionTitle>

          <CodePreview
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

<Card variant="glass">
  <CardHeader>
    <CardTitle>Glass Effect</CardTitle>
    <CardDescription>Premium sections with backdrop blur</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Frosted glass effect with backdrop blur.</p>
  </CardContent>
</Card>

<Card variant="gradient">
  <CardHeader>
    <CardTitle className="text-white">Gradient</CardTitle>
    <CardDescription className="text-white/80">Bold premium features</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-white/90">Eye-catching gradient for premium content.</p>
  </CardContent>
</Card>

<Card variant="gradient-vibrant">
  <CardHeader>
    <CardTitle className="text-white">Gradient Vibrant</CardTitle>
    <CardDescription className="text-white/90">Maximum impact - use sparingly!</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button variant="secondary-inverse">Upgrade Now</Button>
  </CardFooter>
</Card>`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="glass">
                <CardHeader>
                  <Badge variant="soft-purple">Special</Badge>
                  <CardTitle>Glass Effect</CardTitle>
                  <CardDescription>
                    Premium sections with backdrop blur
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Frosted glass effect with backdrop blur. Creates a premium,
                    modern aesthetic.
                  </p>
                </CardContent>
              </Card>

              <Card variant="gradient">
                <CardHeader>
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white"
                  >
                    Premium Only
                  </Badge>
                  <CardTitle className="text-white">Gradient</CardTitle>
                  <CardDescription className="text-white/80">
                    Bold premium features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">
                    Eye-catching gradient for premium content. Use sparingly for
                    maximum impact.
                  </p>
                </CardContent>
              </Card>

              <Card variant="gradient-vibrant" className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-white" />
                    <Badge
                      variant="outline"
                      className="border-white/30 text-white"
                    >
                      🔥 Premium Feature
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-2xl">
                    Gradient Vibrant
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    The "nuclear option" - maximum impact for premium features
                    only
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm">
                    The most eye-catching variant with vibrant colors and
                    dramatic hover effects. Reserve ONLY for the most important
                    premium features and upgrade prompts.
                  </p>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="secondary-inverse" size="lg">
                    <Sparkles className="w-4 h-4" />
                    Upgrade Now
                  </Button>
                  <Button variant="outline-inverse" size="lg">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Analytics Dashboard Example */}
        <div>
          <SectionTitle>Analytics Dashboard Example</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="soft-blue">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Total Reach</CardTitle>
                  <TrendingUp className="w-5 h-5 text-info" />
                </div>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-info mb-2">24.8K</div>
                <div className="flex items-center gap-2 text-sm text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="soft-purple">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Engagement</CardTitle>
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>Average rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-primary mb-2">
                  4.2%
                </div>
                <div className="flex items-center gap-2 text-sm text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span>+0.8% improvement</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="soft-coral">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">New Followers</CardTitle>
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <CardDescription>This week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-secondary mb-2">
                  +342
                </div>
                <div className="flex items-center gap-2 text-sm text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span>Above average growth</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media Post Examples */}
        <div>
          <SectionTitle>Social Media Post Example</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop"
                  alt="Post preview"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="soft-purple">Scheduled</Badge>
                    <Badge variant="soft-blue">Instagram</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    🚀 Excited to announce our new AI-powered features! Now
                    available to all users.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>1.2K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>89</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span>45</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop"
                  alt="Agency post preview"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="gradient">Agency Content</Badge>
                    <Badge variant="soft-coral">Multi-Platform</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    📊 Weekly analytics: Your social media performance is
                    improving! Check out the insights.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>2.4K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>156</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span>92</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Publishing Channel Cards */}
        <div>
          <SectionTitle>
            Publishing Channel Cards - Click to Select Pattern
          </SectionTitle>

          <CodePreview
            code={`import { Card } from '@/components/ui/card'
import { useState } from 'react'

// Channel Configuration
const channelConfig = {
  instagram: {
    name: "Instagram",
    types: ["Feed", "Story"],
    bgColor: "bg-linear-to-br from-purple-500 via-pink-500 to-orange-500"
  }
}

function PublishingChannelCard({ channel, selected, onClick }) {
  const config = channelConfig[channel]

  return (
    <Card
      className={\`p-4 cursor-pointer transition-all \${
        selected
          ? 'border-2 border-primary bg-primary/5'
          : 'border-2 border-border'
      }\`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className={\`w-8 h-8 rounded-lg \${config.bgColor} flex items-center justify-center\`}>
          <svg className="w-4 h-4 text-white">{/* Icon */}</svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-foreground">{config.name}</div>
          <div className="text-xs text-muted-foreground">{config.types.join(' + ')}</div>
        </div>
      </div>
    </Card>
  )
}`}
          >
            <PublishingChannelCardsDemo />
          </CodePreview>
        </div>

        {/* Media Upload Card */}
        <div>
          <SectionTitle>Media Upload Card - Drag & Drop Pattern</SectionTitle>

          <CodePreview
            code={`import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, X } from 'lucide-react'
import { useState } from 'react'

function MediaUploadCard() {
  const [files, setFiles] = useState([])

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Media</h3>
            <p className="text-sm text-muted-foreground">Upload images or videos</p>
          </div>
          <Button variant="outline" size="sm">
            Customize per Channel
          </Button>
        </div>

        {/* Upload Zone */}
        <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            id="media-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="media-upload" className="cursor-pointer">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <div className="text-sm font-semibold text-foreground">
              Click to upload or drag and drop
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              PNG, JPG, GIF, MP4 up to 10MB
            </div>
          </label>
        </div>
      </div>
    </Card>
  )
}`}
          >
            <MediaUploadCardDemo />
          </CodePreview>
        </div>

        {/* Text Editor Cards */}
        <div>
          <SectionTitle>
            Text Editor Cards - Content Creation Patterns
          </SectionTitle>

          {/* Basic Version */}
          <div className="mb-6">
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Basic - Global Text
            </h5>

            <CodePreview
              code={`import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'

function TextEditorCard() {
  const [text, setText] = useState('')

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Post Text</h3>
            <p className="text-sm text-muted-foreground">Write your caption and hashtags</p>
          </div>
          <Button variant="outline" size="sm">
            Customize per Channel
          </Button>
        </div>

        <div className="relative">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your post text here..."
            className="min-h-[200px] pr-24 pb-8"
          />
          <Badge
            variant="counter-safe"
            className="absolute bottom-2 right-2 text-xs"
          >
            {text.length}/2200
          </Badge>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Copilot
          </Button>
          <Button variant="primary" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Generate
          </Button>
        </div>
      </div>
    </Card>
  )
}`}
            >
              <TextEditorCardBasicDemo />
            </CodePreview>
          </div>

          {/* Multi-Channel Version */}
          <div>
            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Advanced - Multi-Platform Character Tracking
            </h5>

            <CodePreview
              code={`import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'

const platformLimits = {
  instagram: { name: 'Instagram', limit: 2200, icon: '📷' },
  facebook: { name: 'Facebook', limit: 63206, icon: '👍' },
  twitter: { name: 'Twitter', limit: 280, icon: '🐦' }
}

function MultiChannelTextEditorCard() {
  const [text, setText] = useState('')

  const getCounterVariant = (length, limit) => {
    const percentage = (length / limit) * 100
    if (percentage >= 100) return 'counter-over'
    if (percentage >= 90) return 'counter-warning'
    return 'counter-safe'
  }

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Post Text</h3>
            <p className="text-sm text-muted-foreground">One text, tracked across all platforms</p>
          </div>
        </div>

        <div className="relative">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your post text here..."
            className="min-h-[200px] pb-12"
          />

          {/* Multiple counters side by side */}
          <div className="absolute bottom-2 right-2 flex gap-2">
            {Object.keys(platformLimits).map((platform) => {
              const config = platformLimits[platform]
              return (
                <Badge
                  key={platform}
                  variant={getCounterVariant(text.length, config.limit)}
                  className="text-xs"
                  title={config.name}
                >
                  {config.icon} {text.length}/{config.limit}
                </Badge>
              )
            })}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Copilot
          </Button>
          <Button variant="primary" size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Generate
          </Button>
        </div>
      </div>
    </Card>
  )
}`}
            >
              <MultiChannelTextEditorCardDemo />
            </CodePreview>
          </div>
        </div>

        {/* Channel Selector Card */}
        <div>
          <SectionTitle>
            Channel Selector Card - Multi-Select Pattern
          </SectionTitle>

          <CodePreview
            code={`import { Card } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const channelConfig = {
  instagram_feed: {
    name: "Instagram",
    type: "Feed",
    icon: "📷",
    bgColor: "bg-linear-to-br from-purple-500 via-pink-500 to-orange-500"
  }
}

function ChannelSelectorCard() {
  const [channelMode, setChannelMode] = useState('all')
  const [selectedChannels, setSelectedChannels] = useState({
    instagram_feed: true,
    instagram_story: true,
    facebook_post: true,
    twitter: false
  })

  const toggleChannel = (channel) => {
    setSelectedChannels(prev => ({ ...prev, [channel]: !prev[channel] }))
  }

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">Select Channels</h3>
          <p className="text-sm text-muted-foreground">Choose where to publish</p>
        </div>

        <RadioGroup value={channelMode} onValueChange={setChannelMode}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All Channels</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="select" id="select" />
            <Label htmlFor="select">Select Channels</Label>
          </div>
        </RadioGroup>

        {channelMode === 'select' && (
          <div className="grid grid-cols-2 gap-3">
            {Object.keys(channelConfig).map((channelKey) => {
              const config = channelConfig[channelKey]
              const selected = selectedChannels[channelKey]

              return (
                <Card
                  key={channelKey}
                  className={\`p-4 cursor-pointer transition-all \${
                    selected
                      ? 'border-2 border-primary bg-primary/5'
                      : 'border-2 border-border'
                  }\`}
                  onClick={() => toggleChannel(channelKey)}
                >
                  <div className="flex items-center gap-3">
                    <div className={\`w-10 h-10 rounded-xl \${config.bgColor} flex items-center justify-center text-xl\`}>
                      {config.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{config.name}</div>
                      <div className="text-xs text-muted-foreground">{config.type}</div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </Card>
  )
}`}
          >
            <ChannelSelectorCardDemo />
          </CodePreview>
        </div>

        {/* Calendar Example */}
        <div>
          <SectionTitle>Content Calendar Example</SectionTitle>

          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>January 2025</CardTitle>
                  <CardDescription>Scheduled posts overview</CardDescription>
                </div>
                <Button variant="primary" size="sm">
                  <Calendar className="w-4 h-4" />
                  Add Post
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-semibold text-muted-foreground pb-2"
                    >
                      {day}
                    </div>
                  ),
                )}

                {[...Array(31)].map((_, i) => (
                  <Card
                    key={i}
                    variant={
                      i === 14
                        ? "soft-purple"
                        : i === 21
                          ? "soft-coral"
                          : "flat"
                    }
                    className="aspect-square p-2 flex flex-col items-start justify-start hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <span className="text-xs font-semibold text-foreground">
                      {i + 1}
                    </span>
                    {i === 14 && (
                      <div className="mt-1 flex gap-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      </div>
                    )}
                    {i === 21 && (
                      <div className="mt-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-8">
          <h4 className="font-bold text-lg mb-4 text-foreground">
            Usage Guidelines
          </h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              → <strong>Default/Elevated/Flat/Outline:</strong> Your everyday
              cards for standard content containers
            </p>
            <p>
              → <strong>Soft Pastells (Purple/Coral/Blue/Green/Pink):</strong>{" "}
              Organize and group related content with gentle visual cues
            </p>
            <p>
              → <strong>Glass:</strong> Reserve for premium sections, hero
              areas, or special overlays - use sparingly
            </p>
            <p>
              → <strong>Gradient:</strong> ONLY for premium features, agency
              content, and upgrade CTAs - never for regular content
            </p>
            <p>
              → <strong>Gradient Vibrant:</strong> The "nuclear option" -
              absolutely ONLY for the most important premium features
            </p>
            <p>
              → <strong>Cards vs Buttons:</strong> Cards organize content
              (soft), Buttons drive action (bold) - they complement each other
            </p>
            <p>
              → <strong>Publishing Channel Cards:</strong> Use Switch for toggle
              states, platform colors for visual recognition
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
