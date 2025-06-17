import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import {
	AlertCircle,
	CheckCircle,
	Info,
	type LucideIcon,
	XCircle,
} from "lucide-react";
import type { ReactNode } from "react";

const statusMessageVariants = cva(
	"rounded-lg p-4 border transition-all duration-200",
	{
		variants: {
			variant: {
				success:
					"bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-950/50 dark:to-emerald-950/50 border-green-200 dark:border-green-800",
				error:
					"bg-gradient-to-r from-red-50/80 to-rose-50/80 dark:from-red-950/50 dark:to-rose-950/50 border-red-200 dark:border-red-800",
				warning:
					"bg-gradient-to-r from-yellow-50/80 to-amber-50/80 dark:from-yellow-950/50 dark:to-amber-950/50 border-yellow-200 dark:border-yellow-800",
				info: "bg-gradient-to-r from-blue-50/80 to-cyan-50/80 dark:from-blue-950/50 dark:to-cyan-950/50 border-blue-200 dark:border-blue-800",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	},
);

const iconVariants = cva(
	"h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
	{
		variants: {
			variant: {
				success: "bg-green-100 dark:bg-green-900/50",
				error: "bg-red-100 dark:bg-red-900/50",
				warning: "bg-yellow-100 dark:bg-yellow-900/50",
				info: "bg-blue-100 dark:bg-blue-900/50",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	},
);

const iconColorVariants = cva("h-3 w-3", {
	variants: {
		variant: {
			success: "text-green-600 dark:text-green-400",
			error: "text-red-600 dark:text-red-400",
			warning: "text-yellow-600 dark:text-yellow-400",
			info: "text-blue-600 dark:text-blue-400",
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

const titleVariants = cva("text-sm font-medium mb-1", {
	variants: {
		variant: {
			success: "text-green-800 dark:text-green-200",
			error: "text-red-800 dark:text-red-200",
			warning: "text-yellow-800 dark:text-yellow-200",
			info: "text-blue-800 dark:text-blue-200",
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

const descriptionVariants = cva("text-sm", {
	variants: {
		variant: {
			success: "text-green-700 dark:text-green-300",
			error: "text-red-700 dark:text-red-300",
			warning: "text-yellow-700 dark:text-yellow-300",
			info: "text-blue-700 dark:text-blue-300",
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

const defaultIcons: Record<string, LucideIcon> = {
	success: CheckCircle,
	error: XCircle,
	warning: AlertCircle,
	info: Info,
};

export interface StatusMessageProps
	extends VariantProps<typeof statusMessageVariants> {
	title?: string;
	description?: string | ReactNode;
	icon?: LucideIcon;
	className?: string;
	children?: ReactNode;
}

export function StatusMessage({
	variant = "info",
	title,
	description,
	icon,
	className,
	children,
}: StatusMessageProps) {
	const IconComponent = icon || defaultIcons[variant || "info"];

	return (
		<div className={cn(statusMessageVariants({ variant }), className)}>
			<div className="flex items-start gap-3">
				<div className={cn(iconVariants({ variant }))}>
					<IconComponent className={cn(iconColorVariants({ variant }))} />
				</div>
				<div className="flex-1">
					{title && <p className={cn(titleVariants({ variant }))}>{title}</p>}
					{description && (
						<div className={cn(descriptionVariants({ variant }))}>
							{description}
						</div>
					)}
					{children}
				</div>
			</div>
		</div>
	);
}
