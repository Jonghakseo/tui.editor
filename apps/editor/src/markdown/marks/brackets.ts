import { EditorCommand } from '@t/spec';
import Mark from '@/spec/mark';
import { toggleWrappingMark } from '@/markdown/helper/mdCommand';
import { DOMOutputSpecArray } from 'prosemirror-model';

const reBrackets = /^([).*([\s\S]*)(])$/m;
const leftBrackets = '[';
const rightBrackets = ']';

export class Brackets extends Mark {
  get name() {
    return 'brackets';
  }

  get schema() {
    return {
      toDOM(): DOMOutputSpecArray {
        return ['span'];
      },
    };
  }

  commands(): EditorCommand {
    return toggleWrappingMark(reBrackets, leftBrackets, rightBrackets);
  }

  keymaps() {
    const codeCommand = this.commands()();

    return { '[': codeCommand };
  }
}
