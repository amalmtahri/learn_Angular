import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]
})
export class DirectoryComponent implements OnInit {
  ninjas = [];
  ninja: string;
  constructor(private route: ActivatedRoute, private logger:LoggingService) { 
    this.ninja = route.snapshot.params['ninja'];
  }
  logIt(){
    this.logger.log();
  }

  ngOnInit(): void {
  }

}
