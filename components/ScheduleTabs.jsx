"use client";

import { useEffect, useState } from "react";
import classes from "@/data/classes.json";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ScheduleTabs({ previewDay = null, showDetails = true }) {
  const [day, setDay] = useState(previewDay || "Monday");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (!previewDay) {
      const today = new Date().getDay(); // 0 = Sunday
      setDay(DAYS[(today + 6) % 7]);
    }
  }, [previewDay]);

  const dayClasses = classes.filter((c) => c.day === day);

  return (
    <div className="schedule">
      <div className="day-tabs" role="tablist" aria-label="Day of the week">
        {DAYS.map((d) => (
          <button
            key={d}
            role="tab"
            aria-selected={day === d}
            className="day-tab"
            onClick={() => { setDay(d); setOpenId(null); }}
          >
            <span className="day-short">{d.slice(0, 3)}</span>
            <span className="day-full">{d}</span>
          </button>
        ))}
      </div>
      <div className="class-list" role="tabpanel">
        {dayClasses.map((c) => {
          const open = openId === c.id;
          return (
            <article className={`class-item${open ? " open" : ""}`} key={c.id}>
              <button
                className="class-summary"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : c.id)}
              >
                <span className="class-time">{c.time}</span>
                <span>
                  <span className="class-name">{c.name}</span>
                  <span className="class-teacher">with {c.teacher}</span>
                  <span className="class-tagline">{c.tagline}</span>
                </span>
                <svg className="class-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {showDetails && open ? (
                <div className="class-details">
                  <div>
                    <h4>About this class</h4>
                    <p>{c.description}</p>
                    {c.benefits ? (
                      <>
                        <h4 style={{ marginTop: 14 }}>Benefits</h4>
                        <p>{c.benefits.replace(/^Benefits:\s*/, "")}</p>
                      </>
                    ) : null}
                    {c.avoid ? (
                      <div className="avoid-note">
                        <p>{c.avoid}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
