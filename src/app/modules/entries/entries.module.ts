import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntriesRoutingModule } from './entries-routing.module';
import { PiaService } from 'src/app/services/pia.service';
import { StructureService } from 'src/app/services/structure.service';
import { AnswerStructureService } from 'src/app/services/answer-structure.service';
import { MeasureService } from 'src/app/services/measures.service';
import { AttachmentsService } from 'src/app/services/attachments.service';
import { NewPiaComponent } from './forms/new-pia/new-pia.component';
import { PiaCardComponent } from './cards/pia-card/pia-card.component';
import { PiaLineComponent } from './list/pia-line/pia-line.component';
import { ArchiveService } from 'src/app/services/archive.service';
import { ArchiveCardComponent } from './cards/archive-card/archive-card.component';
import { ArchiveLineComponent } from './list/archive-line/archive-line.component';
import { StructureCardComponent } from './cards/structure-card/structure-card.component';
import { NewStructureComponent } from './forms/new-structure/new-structure.component';



@NgModule({
  declarations: [
    EntriesComponent,
    NewPiaComponent,
    PiaCardComponent,
    PiaLineComponent,
    ArchiveCardComponent,
    ArchiveLineComponent,
    StructureCardComponent,
    NewStructureComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    EntriesRoutingModule
  ],
  providers: [
    PiaService,
    ArchiveService,
    StructureService,
    AnswerStructureService,
    MeasureService,
    AttachmentsService ]
})
export class EntriesModule { }
