"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Upload } from "lucide-react";
import { useState, useRef } from "react";

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    company?: string;
}

const JobApplicationModal = ({ isOpen, onClose, company }: JobApplicationModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        area: "",
        link: "",
        resume: null as File | null,
        message: "",
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Job Application Submitted:", { ...formData, company });
        onClose();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] grid place-items-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-[550px] rounded-xl bg-white p-6 md:p-10 shadow-2xl my-8"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="space-y-1">
                                    <h2 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                                        Job application
                                    </h2>
                                    {company && (
                                        <p className="font-mono text-[10px] text-orange-600 uppercase font-bold tracking-widest">
                                            Role: {company}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                                >
                                    <X className="h-5 w-5 md:h-6 md:w-6" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 md:py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 transition-colors"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Primary Area of Contribution */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700">
                                        Primary area of contribution
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2.5 md:py-3 text-sm text-gray-900 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 transition-colors"
                                            value={formData.area}
                                            onChange={(e) =>
                                                setFormData({ ...formData, area: e.target.value })
                                            }
                                        >
                                            <option value="" disabled>Select one</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Product">Product</option>
                                            <option value="Research">Research</option>
                                            <option value="Operations">Operations</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 md:py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 transition-colors"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Link */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700">
                                        Link (optional)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Portfolio, GitHub, or LinkedIn"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2.5 md:py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 transition-colors"
                                        value={formData.link}
                                        onChange={(e) =>
                                            setFormData({ ...formData, link: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Upload Resume */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700">
                                        Upload resume*
                                    </label>
                                    <div className="relative flex items-center rounded-md border border-gray-300 bg-white px-2 py-2">
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="rounded bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                                        >
                                            {formData.resume ? 'Change' : 'Upload'}
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                        <span className="ml-3 text-[11px] md:text-sm text-gray-500 truncate max-w-[150px] md:max-w-none">
                                            {formData.resume ? formData.resume.name : "No file chosen"}
                                        </span>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-700">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            rows={3}
                                            placeholder="Briefly describe the context of your outreach..."
                                            maxLength={500}
                                            className="w-full resize-none rounded-md border border-gray-300 px-4 py-2.5 md:py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 transition-colors"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                        />
                                        <div className="absolute bottom-2 right-2 text-[9px] text-gray-400 font-medium">
                                            {formData.message.length}/500
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 md:pt-6">
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-[#E54505] px-4 py-3.5 md:py-4 text-xs md:text-sm font-bold text-white transition-all transform active:scale-95 hover:bg-orange-700 shadow-lg shadow-orange-600/20"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default JobApplicationModal;
