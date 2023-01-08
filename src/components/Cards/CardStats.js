import React from "react";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="pb-4 relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blue-900 font-bold text-xs">
              <i className={statIconName}></i>
                &nbsp; {statSubtitle}
              </h5>

              {statSubtitle == '' ? (
                  <span className="text-green-500 font-semibold font-bold ">
                    {statTitle}
                </span>
                ) : (
                  <span className="font-semibold font-bold text-2xl text-blue-900">
                    {statTitle}
                  </span>
                )}
            </div>            
          </div>
        </div>
      </div>
    </>
  );
}

