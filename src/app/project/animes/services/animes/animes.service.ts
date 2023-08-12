import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { CollectPayloadType } from "../../animes.component";
import { Anime } from "../../state/anime.model";

@Injectable({
  providedIn: "root",
})
export class AnimesService {
  animes: Anime[] = [
    { id: "1", name: "Ezuken", description: "lorem ipsum" },
    { id: "2", name: "Ruroni Kenshin", description: "lorem ipsum" },
    { id: "3", name: "One piece", description: "lorem ipsum" },
    { id: "4", name: "Dragon ball", description: "lorem ipsum" },
    { id: "5", name: "Ramma", description: "lorem ipsum" },
    { id: "6", name: "Inuyasha", description: "lorem ipsum" },
    { id: "7", name: "Oroshimaru", description: "lorem ipsum" },
    { id: "8", name: "Bersek", description: "lorem ipsum" },
    { id: "9", name: "Ashinta no joe", description: "lorem ipsum" },
    { id: "10", name: "Saint saiya", description: "lorem ipsum" },
    { id: "11", name: "Mod 100", description: "lorem ipsum" },
    { id: "12", name: "Totoro", description: "lorem ipsum" },
    { id: "13", name: "Mononoko", description: "lorem ipsum" },
  ];

  constructor() {}

  getAll() {
    return of(this.animes).pipe(delay(500));
  }

  // filter(data: CollectPayloadType) {
  //   const params = new HttpParams().set(
  //     "pagination.size",
  //     data.pagination.size,
  //   );

  //   console.log(params);
  // }
}
