import React from "react";
import EmptyState from "../EmptyState";
import Loading from "../Loading";
import ResolvedState from "../ResolvedState";
import { getCurrentDate } from "../util/GetDate";
import { getIcon } from "../util/GetIcon";

function Body({ weather, loading, timezone }) {
  return (
    <div className="Body">
      {weather ? (
        loading ? (
          <Loading />
        ) : (
          <ResolvedState
            weather={weather}
            getCurrentDate={getCurrentDate}
            timezone={timezone}
            getIcon={getIcon}
          />
        )
      ) : (
        <EmptyState getIcon={getIcon} />
      )}
    </div>
  );
}

export default Body;
