import { formatDate } from "@/lib/utils";
import { Eye, EyeIcon, Link } from "lucide-react";
import React from "react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div>
            <Link href={`/user/${post.author?._id}`} />
        </div>

      </div>
    </li>
  );
};

export default StartupCard;
