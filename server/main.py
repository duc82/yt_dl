import uvicorn
from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from yt_dlp import YoutubeDL


class Video(BaseModel):
    videoId: str

app = FastAPI()


@app.get("/")
def root():
    return {"Hello": "World"}


@app.post("/api/video/info")
def get_video_info(body: Video):
    videoId = body.videoId

    if not videoId:
        raise HTTPException(status_code=400, detail="Video ID is required")

    try:
        videoInfo =  YoutubeDL({
            "no_playlist": True
        }).extract_info(f"ytsearch10:{videoId}", download=False)["entries"]
    except Exception:
        raise HTTPException(status_code=404, detail="Video not found")

    return videoInfo


if __name__ == "__main__":
    uvicorn.run(app,host="localhost",port=5000)