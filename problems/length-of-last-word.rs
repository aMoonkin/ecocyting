impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        if s.len() == 0 {
            return 0;
        }

        let c: Vec<&str> = s.split_whitespace().collect();
        match c.last() {
            None => 0,
            Some(v) => v.len() as i32
        }
    }
}