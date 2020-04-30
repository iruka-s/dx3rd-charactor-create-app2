Syndrome.create([
  {:english_name => 'empty', :name => '未選択', :body => '0', :sense => '0', :spirit => '0', :society => '0'},
  {:english_name => 'angelhighlow', :name => 'エンジェルハイロゥ', :body => '0', :sense => '3', :spirit => '1', :society => '0'},
  {:english_name => 'balor', :name => 'バロール', :body => '0', :sense => '1', :spirit => '2', :society => '1'},
  {:english_name => 'blackdog', :name => 'ブラックドッグ', :body => '2', :sense => '1', :spirit => '1', :society => '0'},
  {:english_name => 'bramstoker', :name => 'ブラム=ストーカー', :body => '1', :sense => '2', :spirit => '1', :society => '0'},
  {:english_name => 'chimera', :name => 'キュマイラ', :body => '3', :sense => '0', :spirit => '0', :society => '1'},
  {:english_name => 'exile', :name => 'エグザイル', :body => '2', :sense => '1', :spirit => '0', :society => '1'},
  {:english_name => 'hanuman', :name => 'ハヌマーン', :body => '1', :sense => '1', :spirit => '1', :society => '1'},
  {:english_name => 'morpheus', :name => 'モルフェウス', :body => '1', :sense => '2', :spirit => '0', :society => '1'}
])

Effect.create([
  {:syndrome => 'angelhighlow', :name => '幻惑の光',           :max_level => '1',  :timing => '1', :skill => '4', :difficulty => '2', :target => '0', :range => '3', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '1', :effect_sort1 => '15', :effect_content1 => 'BD:放心',                       :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'angelhighlow', :name => '神の眼',             :max_level => '1',  :timing => '2', :skill => '5', :difficulty => '2', :target => '1', :range => '1', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '0', :effect_sort1 => '19', :effect_content1 => '<知覚>',                        :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'angelhighlow', :name => '光芒の疾走',         :max_level => '3',  :timing => '0', :skill => '0', :difficulty => '1', :target => '1', :range => '1', :erosion_point => '1', :limit => '0', :count => '1', :other => '0', :sort => '0', :effect_sort1 => '22', :effect_content1 => '離脱可、エンゲージと封鎖無視',  :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'angelhighlow', :name => '主の恩恵',           :max_level => '3',  :timing => '0', :skill => '0', :difficulty => '1', :target => '1', :range => '1', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '0', :effect_sort1 => '2',  :effect_content1 => '+LV',                           :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'angelhighlow', :name => '主の右腕',           :max_level => '5',  :timing => '1', :skill => '1', :difficulty => '2', :target => '0', :range => '0', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '0', :effect_sort1 => '3',  :effect_content1 => 'LV×2',                         :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'angelhighlow', :name => '水晶の眼',           :max_level => '3',  :timing => '4', :skill => '5', :difficulty => '0', :target => '0', :range => '0', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '0', :effect_sort1 => '2',  :effect_content1 => '+LV',                           :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'angelhighlow', :name => 'スターダストレイン', :max_level => '3',  :timing => '1', :skill => '4', :difficulty => '2', :target => '7', :range => '3', :erosion_point => '6', :limit => '0', :count => '3', :other => '0', :sort => '1', :effect_sort1 => '23', :effect_content1 => '視界',                          :effect_sort2 => '24', :effect_content2 => 'シーン(選択)', :effect_sort3 => '3',  :effect_content3 => 'LV×5-20' },
  {:syndrome => 'balor',        :name => '因果歪曲',           :max_level => '3',  :timing => '1', :skill => '1', :difficulty => '0', :target => '5', :range => '0', :erosion_point => '3', :limit => '0', :count => '2', :other => '0', :sort => '0', :effect_sort1 => '24', :effect_content1 => '範囲(選択)',                    :effect_sort2 => '26', :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'balor',        :name => '巨人の斧',           :max_level => '3',  :timing => '1', :skill => '6', :difficulty => '2', :target => '0', :range => '2', :erosion_point => '3', :limit => '0', :count => '0', :other => '0', :sort => '3', :effect_sort1 => '3',  :effect_content1 => '+LV×3',                        :effect_sort2 => '2',  :effect_content2 => '-2',           :effect_sort3 => '0',  :effect_content3 => '' },
  {:syndrome => 'balor',        :name => '黒の鉄槌',           :max_level => '5',  :timing => '1', :skill => '4', :difficulty => '2', :target => '0', :range => '3', :erosion_point => '1', :limit => '0', :count => '0', :other => '0', :sort => '1', :effect_sort1 => '3',  :effect_content1 => '+LV×2+2',                      :effect_sort2 => '26', :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => ''},
  {:syndrome => 'balor',        :name => '孤独の魔眼',         :max_level => '3',  :timing => '3', :skill => '0', :difficulty => '1', :target => '8', :range => '3', :erosion_point => '4', :limit => '0', :count => '2', :other => '0', :sort => '0', :effect_sort1 => '24', :effect_content1 => '範囲,範囲(選択)→自分単体',     :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => ''},
  {:syndrome => 'balor',        :name => '漆黒の拳',           :max_level => '10', :timing => '1', :skill => '2', :difficulty => '2', :target => '2', :range => '2', :erosion_point => '3', :limit => '0', :count => '0', :other => '0', :sort => '2', :effect_sort1 => '3',  :effect_content1 => '+LV',                           :effect_sort2 => '39', :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => ''},
  {:syndrome => 'blackdog',     :name => 'イオノクラフト',     :max_level => '5',  :timing => '0', :skill => '0', :difficulty => '1', :target => '1', :range => '1', :erosion_point => '1', :limit => '0', :count => '0', :other => '0', :sort => '0', :effect_sort1 => '22', :effect_content1 => '',                              :effect_sort2 => '8',  :effect_content2 => '+LV+2',        :effect_sort3 => '5',  :effect_content3 => 'AD:飛行状態'},
  {:syndrome => 'blackdog',     :name => 'アームズリンク',     :max_level => '3',  :timing => '1', :skill => '6', :difficulty => '2', :target => '0', :range => '2', :erosion_point => '2', :limit => '0', :count => '0', :other => '5', :sort => '3', :effect_sort1 => '2',  :effect_content1 => '+LV',                           :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => ''},
  {:syndrome => 'blackdog',     :name => '雷の加護',           :max_level => '3',  :timing => '0', :skill => '0', :difficulty => '1', :target => '1', :range => '1', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '0', :effect_sort1 => '2',  :effect_content1 => '+LV',                           :effect_sort2 => '0',  :effect_content2 => '',             :effect_sort3 => '0',  :effect_content3 => ''},
  {:syndrome => 'blackdog',     :name => '雷の槍',             :max_level => '5',  :timing => '1', :skill => '4', :difficulty => '2', :target => '0', :range => '3', :erosion_point => '2', :limit => '0', :count => '0', :other => '0', :sort => '1', :effect_sort1 => '3',  :effect_content1 => '+LV×2+4',                      :effect_sort2 => '2',  :effect_content2 => '-1',           :effect_sort3 => '23', :effect_content3 => ''}
])

Weapon.create([
  {:name => '素手', :sort => '0', :skill => '<白兵>', :hit => '0', :offensive_power => '-5', :guard_point => '0', :range => '至近', :purchase_point => '購入不可', :standby_point => '0'},
  {:name => 'クロスボウ', :sort => '1', :skill => '<射撃>', :hit => '-2', :offensive_power => '2', :guard_point => '-', :range => '40m', :purchase_point => '7', :standby_point => '4'}
])

Armor.create([
  {:name => '強化服', :sort => '0', :dodge => '-', :action_point => '-', :armor_point => '1', :purchase_point => '5', :standby_point => '1'}
])

Item.create([
  {:name => '自転車', :sort => '0', :skill => '<運転:二輪>', :purchase_point => '5', :standby_point => '1'}
])

Impulse.create([
  {:name => '未選択', :erosion_point => '0'},
  {:name => '憤怒', :erosion_point => '18'},
  {:name => '素体', :erosion_point => '17'},
  {:name => '感染', :erosion_point => '16'},
  {:name => '渇望', :erosion_point => '14'},
  {:name => '無知', :erosion_point => '15'},
  {:name => '犠牲', :erosion_point => '16'},
  {:name => '命令', :erosion_point => '15'},
  {:name => '忘却', :erosion_point => '17'},
  {:name => '探求', :erosion_point => '14'},
  {:name => '償い', :erosion_point => '18'},
  {:name => '生誕', :erosion_point => '17'}
])

Awakening.create([
  {:name => '未選択', :erosion_point => '0'},
  {:name => '解放', :erosion_point => '18'},
  {:name => '吸血', :erosion_point => '17'},
  {:name => '飢餓', :erosion_point => '14'},
  {:name => '殺戮', :erosion_point => '18'},
  {:name => '破壊', :erosion_point => '16'},
  {:name => '加虐', :erosion_point => '15'},
  {:name => '嫌悪', :erosion_point => '15'},
  {:name => '闘争', :erosion_point => '16'},
  {:name => '妄想', :erosion_point => '14'},
  {:name => '自傷', :erosion_point => '16'},
  {:name => '恐怖', :erosion_point => '17'},
  {:name => '憎悪', :erosion_point => '18'}
])

Work.create([
  {:name => '未選択',         :ability => '-',       :skill1 => '-',            :value1 => '-', :skill2 => '-',              :value2 => '-', :skill3 => '-',              :value3 => '-', :skill4 => '-',               :value4 => '-', :skill5 => '-',                 :value5 => '-'},
  {:name => '小学生',         :ability => 'sense',   :skill1 => 'PERCEPTION',   :value1 => '2', :skill2 => 'INTENTION',      :value2 => '2', :skill3 => 'RC',             :value3 => '1', :skill4 => 'INFOMATION:噂話', :value4 => '1', :skill5 => '-',                 :value5 => '-'},
  {:name => '中学生',         :ability => 'sense',   :skill1 => 'PERCEPTION',   :value1 => '1', :skill2 => 'INTENTION',      :value2 => '1', :skill3 => 'RC',             :value3 => '2', :skill4 => 'INFOMATION:噂話', :value4 => '1', :skill5 => '-',                 :value5 => '-'},
  {:name => '高校生',         :ability => 'body',    :skill1 => 'AVOID',        :value1 => '1', :skill2 => 'PERCEPTION',     :value2 => '1', :skill3 => 'RC',             :value3 => '2', :skill4 => 'INFOMATION:噂話', :value4 => '1', :skill5 => '-',                 :value5 => '-'},
  {:name => '不良学生',       :ability => 'body',    :skill1 => 'MELEE',        :value1 => '1', :skill2 => 'DRIVING:任意',   :value2 => '2', :skill3 => 'PERCEPTION',     :value3 => '1', :skill4 => 'INTENTION',       :value4 => '1', :skill5 => 'INFOMATION:裏社会', :value5 => '1'},
  {:name => '大学生',         :ability => 'spirit',  :skill1 => 'AVOID',        :value1 => '1', :skill2 => 'DRIVING:任意',   :value2 => '2', :skill3 => 'INTENTION',      :value3 => '1', :skill4 => 'KNOWLEDGE:任意',  :value4 => '2', :skill5 => 'INFOMATION:学問',   :value5 => '1'},
  {:name => 'フリーター',     :ability => 'body',    :skill1 => 'MELEE',        :value1 => '1', :skill2 => 'DRIVING:任意',   :value2 => '2', :skill3 => 'INTENTION',      :value3 => '1', :skill4 => 'KNOWLEDGE:任意',  :value4 => '2', :skill5 => 'INFOMATION:ウェブ', :value5 => '1'},
  {:name => '教師',           :ability => 'spirit',  :skill1 => 'DRIVING:任意', :value1 => '2', :skill2 => 'KNOWLEDGE:任意', :value2 => '2', :skill3 => 'NEGOTIATION',    :value3 => '1', :skill4 => 'PROCUREMENT',     :value4 => '1', :skill5 => 'INFOMATION:学問',   :value5 => '1'},
  {:name => '主婦・主夫',     :ability => 'society', :skill1 => 'ART:任意',     :value1 => '2', :skill2 => 'INTENTION',      :value2 => '1', :skill3 => 'NEGOTIATION',    :value3 => '2', :skill4 => 'INFOMATION:噂話', :value4 => '1', :skill5 => '-',                 :value5 => '-'},
  {:name => 'UGNチルドレンA', :ability => 'body',    :skill1 => 'MELEE',        :value1 => '2', :skill2 => 'AVOID',          :value2 => '1', :skill3 => 'RC',             :value3 => '1', :skill4 => 'INFOMATION:UGN',  :value4 => '1', :skill5 => '-',                 :value5 => '-'}
])

PositiveEmotion.create([
  {:name => '未選択'},
  {:name => '傾倒'},
  {:name => '好奇心'},
  {:name => '憧憬'},
  {:name => '尊敬'},
  {:name => '連帯感'},
  {:name => '慈愛'},
  {:name => '感服'},
  {:name => '純愛'},
  {:name => '友情'},
  {:name => '慕情'},
  {:name => '同情'},
  {:name => '遺志'},
  {:name => '庇護'},
  {:name => '幸福感'},
  {:name => '信頼'},
  {:name => '執着'},
  {:name => '親近感'},
  {:name => '誠意'},
  {:name => '好意'},
  {:name => '有為'},
  {:name => '尽力'},
  {:name => '懐旧'},
  {:name => '任意'}
])

NegativeEmotion.create([
  {:name => '未選択'},
  {:name => '侮蔑'},
  {:name => '食傷'},
  {:name => '脅威'},
  {:name => '嫉妬'},
  {:name => '悔悟'},
  {:name => '恐怖'},
  {:name => '不安'},
  {:name => '劣等感'},
  {:name => '疎外感'},
  {:name => '恥辱'},
  {:name => '憐憫'},
  {:name => '偏愛'},
  {:name => '憎悪'},
  {:name => '隔意'},
  {:name => '嫌悪'},
  {:name => '猜疑心'},
  {:name => '厭気'},
  {:name => '不信感'},
  {:name => '不快感'},
  {:name => '憤懣'},
  {:name => '敵愾心'},
  {:name => '無関心'},
  {:name => '任意'}
])

# Syndrome.where(id: 1..3).delete_all

# DBデータ削除SQL一覧
# select name from sqlite_master where type='table';
# delete from syndromes;
# delete from effects;
# delete from weapons;
# delete from armors;
# delete from items;
# delete from impulses;
# delete from awakenings;
# delete from works;